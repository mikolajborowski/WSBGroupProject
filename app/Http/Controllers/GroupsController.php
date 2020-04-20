<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Groups;
use App\GroupsRecords;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Channels;

class GroupsController extends Controller
{
    public function addGroup(Request $request)
    {
        $user = json_decode(auth()->user(), true);
        $user_id = $user['id'];
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
        }
        Groups::create([
            'name' => $request->get('name'),
            'user_id' => $user_id
        ]);
        $result = $this->returnListOfGroupsWithRecords($user_id);
        return response()->json($result);
    }
    public function renameGroup(Request $request){
        try{
            $user = json_decode(auth()->user(), true);
            $user_id = $user['id'];
            $request->validate([
                'group_id'=>'required',
                'new_name'=>'required'
            ]);
            $group = Groups::find($request->get('group_id'));
            $group->name =  $request->get('new_name');
            $group->save();
            $result = $this->returnListOfGroupsWithRecords($user_id);
            return response()->json($result);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }
    public function addRecordToGroup(Request $request)
    {
        try{
            $user = json_decode(auth()->user(), true);
            $user_id = $user['id'];
            $validator = Validator::make($request->all(), [
                'group_id' => 'required',
                'channel_id' => 'required',
            ]);

            if ($validator->fails()) {
                    return response()->json($validator->errors()->toJson(), 400);
            }
            GroupsRecords::create([
                'group_id' => (int) $request->get('group_id'),
                'channel_id' => (int) $request->get('channel_id')
            ]);
            $result = $this->returnListOfGroupsWithRecords($user_id);
            return response()->json($result);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }
    public function getAllGroups(){
        try{
            $user = json_decode(auth()->user(), true);
            $user_id = $user['id'];
            $result = $this->returnListOfGroupsWithRecords($user_id);
            return response()->json($result);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }

    private function returnListOfGroupsWithRecords($user_id)
    {
        $groups = DB::table('groups')
            ->where('user_id', $user_id)
            ->get();
        $result = [];
        foreach(json_decode($groups, true) as $key => $group){
            $group_id = $group['id'];
            $channels = [];
            $groups_records = DB::table('groups_records')
            ->where('group_id', $group_id)
            ->get();
            foreach(json_decode($groups_records, true) as $k => $groups_record){
                $channel = DB::table('channels')
                ->where('id', $groups_record['channel_id'])
                ->get();
                $channel = json_decode($channel, true);
                $channels[] = [
                    'id_of_group_record' => $groups_record['id'],
                    'name' => $channel[0]['name'],
                    'link' => $channel[0]['link'],
                ];
            }
            $result[] = [
                'group_id' => $group_id,
                'group_name' => $group['name'],
                'channels' => $channels
            ];
        }
        return $result;
    }

    public function deleteChannelFromGroup(Request $request){
        try{
            $user = json_decode(auth()->user(), true);
            $user_id = $user['id'];
            $validator = Validator::make($request->all(), [
                'channel_group_id' => 'required'
            ]);

            if ($validator->fails()) {
                    return response()->json($validator->errors()->toJson(), 400);
            }
            $record = GroupsRecords::find($request->get('channel_group_id'));
            $record->delete();
            $result = $this->returnListOfGroupsWithRecords($user_id);
            return response()->json($result);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }
    public function deleteGroup(Request $request){
        try{
            $user = json_decode(auth()->user(), true);
            $user_id = $user['id'];
            $validator = Validator::make($request->all(), [
                'group_id' => 'required'
            ]);

            if ($validator->fails()) {
                    return response()->json($validator->errors()->toJson(), 400);
            }
            $record = Groups::find($request->get('group_id'));
            $record->delete();
            $result = $this->returnListOfGroupsWithRecords($user_id);
            return response()->json($result);
        }catch(Exception $e){
            return response()->json($e, 400);
        }
    }
}
