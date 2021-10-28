<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Str;

class userController extends Controller
{
     public function index(){
        $users = DB::table('users')->where('status','1')->where('type','0')->where('id','1')->get();
         // return view('users.userHome')->with('users',$users);
        return response()->json($users, 200);
}

  public function userList(){
        $users = DB::table('users')->where('status','1')->where('type','0')->get();
         // return view('users.userHome')->with('users',$users);
        return response()->json($users, 200);
  }
  public function createUser(Request $req){
    $data=array();
    $data['name']= $req->name;
    $data['phone']= $req->phone;
    $data['email']= $req->email;
    $data['password']= $req->password;
    $insert_user = DB::table('users')->insert($data);
    if($insert_user){
      return response()->json([
        'status'=>200,
        'user'=> $insert_user,
        'message' => 'User Added Successfully'
      ]);
    }
    else{
      return response()->json([
        'status' => 202,
        'message' => 'unsuccessfull'
      ]);
    }
    // $users = DB::table('users')-> 
  }

  public function signin(Request $req){
    $password = $req->password;
    $data = array();
    $data['email']= $req->email;
    $data['password']= $req->password;   
    $user = DB::table('users')
    ->where('email',$req->email)
    ->first(); 
    if($user){
      if($user->password === $password ){
    return response()->json(
      [
        'status'=>200,
        'user'=> $user,
        'message' => 'Login Successfully'
      ]
    );
    }
    else{
      return response()->json(
      [
        'status'=>201,
        
        'message' => ' password is wrong'
      ]
    );
    }
    }
    else{
      return response()->json(
      [
        'status'=>202,
        
        'message' => ' Email  is wrong'
      ]
    );
    }
    
   
  }
}