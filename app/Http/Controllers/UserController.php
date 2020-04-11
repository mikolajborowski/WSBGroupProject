<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
        public function authenticate(Request $request)
        {
                $credentials = $request->only('email', 'password');

                try {
                        if (!$token = JWTAuth::attempt($credentials)) {
                                return response()->json(['error' => 'invalid_credentials'], 400);
                        }
                } catch (JWTException $e) {
                        return response()->json(['error' => 'could_not_create_token'], 500);
                }

                return response()->json(compact('token'));
        }

        public function register(Request $request)
        {
                $validator = Validator::make($request->all(), [
                        'name' => 'required|string|max:255',
                        'email' => 'required|string|email|max:255|unique:users',
                        'password' => 'required|string|min:6|confirmed',
                ]);

                if ($validator->fails()) {
                        return response()->json($validator->errors()->toJson(), 400);
                }
                $user = User::create([
                        'name' => $request->get('name'),
                        'email' => $request->get('email'),
                        'is_user_admin' => 0,
                        'password' => Hash::make($request->get('password')),
                ]);

                $token = JWTAuth::fromUser($user);

                return response()->json(compact('user', 'token'), 201);
        }

        public function getAuthenticatedUser()
        {
                try {

                        if (!$user = JWTAuth::parseToken()->authenticate()) {
                                return response()->json(['user_not_found'], 404);
                        }
                } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                        return response()->json(['token_expired'], $e->getStatusCode());
                } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                        return response()->json(['token_invalid'], $e->getStatusCode());
                } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                        return response()->json(['token_absent'], $e->getStatusCode());
                }
                return response()->json(compact('user'));
        }

        public function changeUserData(Request $request)
        {
                $user = json_decode(auth()->user(), true);
                $this->updateUser($user['id'], $request);

                return response()->json(User::find($user['id']));
        }

        private function updateUser($id, $request)
        {
                $validator = Validator::make($request->all(), [
                        'name' => 'required|string|max:255',
                        'email' => 'required|string|email|max:255|unique:users',
                ]);
                $user = User::find($id);
                $user->name =  $request->get('name');
                $user->email =  $request->get('email');
                $user->save();
        }

        public function setUserAsAdmin($id)
        {

                $user = json_decode(auth()->user(), true);
                $is_request_admin = $this->checkUserAdminSetting($user);
                if($is_request_admin){
                        return response()->json('Permission denied!');
                }
                $is_already_admin = $this->checkIfUserArleadyIsAdmin($id);
                if($is_already_admin){
                        return response()->json('Invalid operation user is admin!');
                }
                $this->setUserAdmin($id);


                return response()->json('Permission granted!');
        }
        private function checkIfUserArleadyIsAdmin($id)
        {
                $user_data = json_decode(User::find($id), true);
                if ($user_data['id'] == 1 || $user_data['is_user_admin'] == 1) {
                        return true;
                }
                return false;
        }

        private function checkUserAdminSetting($user)
        {
                if ($user['id'] != 1) {
                        if ($user['is_user_admin'] != 1) {
                                return true;
                        }
                }
                return false;
        }

        private function setUserAdmin($id)
        {
                $user = User::find($id);
                $user->is_user_admin =  true;
                $user->save();
        }

        public function deleteUser($id)
        {

                $user = json_decode(auth()->user(), true);
                $is_request_admin = $this->checkUserAdminSetting($user);
                if($is_request_admin){
                        return response()->json('Permission denied!');
                }
                $is_already_admin = $this->checkIfUserArleadyIsAdmin($id);
                if($is_already_admin){
                        return response()->json('Invalid operation user is admin!');
                }
                if(empty(User::find($id))){
                        return response()->json('User does not exist!');
                }
                $this->deleteUserAsAdmin((int) $id);
                return response()->json('User deleted!');
        }

        private function deleteUserAsAdmin($id){
                $user = User::find($id);
                $user->delete();
        }
        
        public function getAllUsers(){
                $user = json_decode(auth()->user(), true);
                $is_request_admin = $this->checkUserAdminSetting($user);
                if($is_request_admin){
                        return response()->json('Permission denied!');
                }
                return response()->json(User::all());
        }
}
