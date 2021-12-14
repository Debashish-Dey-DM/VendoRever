<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Str;
use App\Models\Group;


class groupController extends Controller
{
    public function createGroup(Request $request,$id)
    {
        $data = array();
        $data['Group_name'] = $request->Group_name;
        $data['Group_description'] = $request->Group_description;
        $data['Group_type'] = 1;
        $data['Group_status'] = 0;
        $data['Group_admin'] = $id;
        $data['Group_members'] = 1;
        // $group = Group:: create($data);
        // if($group)
        // {
        //     return response()->json(['success'=>'Group Created Successfully']);
        // }
        // else
        // {
        //     return response()->json(['error'=>'Something went wrong']);
        // }
        $insert = DB::table('groups')->insert($data);
        if($insert)
        {
            
         return response()->json([
        'status'=>200,
        'group'=> $insert,
        'message' => 'User Added Successfully'
      ]);
        }
        else
        {
            return response()->json([ 'status'=>500,    'message' => 'Something went wrong' ]);
        }
    }
    public function groupList(Request $request,$id)
    {
        $ismember = DB::table('members')
        ->where('user_id',$id)
        ->pluck('Group_id');
        $group = DB::table('groups')
        ->where('Group_admin',$id)
        ->orWhereIn('id',$ismember)
        ->get();
        if($group)
        {
          
            return response()->json($group, 200);
        }
        else
        {
            return response()->json(['error'=>'Something went wrong']);
        }
       
    }
    public function group(Request $request,$id)
    {
        $group = DB::table('groups')
        ->where('id',$id)
        ->get();
        return response()->json($group, 200);
}

    public function groupMembers(Request $request,$id)
    {
        $member = DB::table('members')
        ->leftJoin('users', 'users.id', '=', 'members.User_id')
        ->select('members.*', 'users.name')
        ->where('members.Group_id',$id)
        ->get();
        return response()->json($member, 200);
}
public function test(Request $request,$id)
    {
        $admin = DB::table('groups')
        ->where('id',$id)
        ->pluck('Group_admin');
        $adminName = DB::table('users')
        ->where('id',$admin)
        ->pluck('name');
        $member = DB::table('members')
        ->leftJoin('users', 'users.id', '=', 'members.user_id')
        ->select('members.*', 'users.name')
        ->where('members.Group_id',$id)
        ->get();


         return response()->json([ 'member'=>$member,'admin'=>$adminName ,'adminId'=>$admin,  'message' => 'Something went wrong' ]);
}

}