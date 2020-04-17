<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::post('user', 'UserController@changeUserData');
    Route::post('admin/set/{id}', 'UserController@setUserAsAdmin');
    Route::post('user/delete/{id}', 'UserController@deleteUser');
    Route::get('admin/list', 'UserController@getAllUsers');
    Route::post('channels/save', 'ChannelsController@saveChannel');
    Route::post('channels/delete/{id}', 'ChannelsController@deleteChannel');
    Route::get('channels/list', 'ChannelsController@getListOfChannels');
    Route::get('channels/format', 'ChannelsController@returnChannelsContent');
    Route::post('group/add', 'GroupsController@addGroup');
    Route::post('group/add/channel', 'GroupsController@addRecordToGroup');
    Route::get('group/all', 'GroupsController@getAllGroups');
    Route::post('group/rename', 'GroupsController@renameGroup');
    Route::post('group/delete/channel', 'GroupsController@deleteChannelFromGroup');
    Route::post('group/delete', 'GroupsController@deleteGroup');
});