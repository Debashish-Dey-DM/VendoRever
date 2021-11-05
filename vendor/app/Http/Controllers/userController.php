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
  public function friendList(Request $req, $id){
      $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_2','=' , 'users.id')
      ->select('friends.*','users.name')
      ->where('friends.user_id_1',$id )
      ->where('friends.type', '1')-> get();

      return response()->json($friends,200);
  }

    public function RequestSent(Request $req, $id){
      $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_2','=' , 'users.id')
      ->select('friends.*','users.name')
      ->where('friends.user_id_1',$id )
      ->where('friends.type', '0')-> get();

      return response()->json($friends,200);
  }


  public function friendRequest(Request $req,$id){
       $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_1','=' , 'users.id')
      ->select('friends.*','users.name')
      ->where('friends.user_id_2',$id )
      ->where('friends.type', '0')-> get();
      return response()->json($friends,200);
  }
  public function testUserList(Request $req,$id){
     $users = DB::table('users')->where('status','1')->where('type','0')->get('id');
     $data = array();
     $data2 = array();
     $data3 = array();
    for ($x = 0; $x < count($users); $x++) {
      $data[$x]= $users[$x]->id;
    }
    

    $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_1','=' , 'users.id')
      ->select('friends.*','users.name')
      ->whereIn('friends.user_id_2',$data )
      ->where('friends.user_id_1',$id )-> get();
      
    for ($x = 0; $x < count($friends); $x++) {
      $data2[$x]= $friends[$x]->user_id_2;
    }
    $result = array_diff($data, $data2);

      foreach ($result as $key => $value) {
        $result[$key] = (object) array('id' => $value);
        //echo $result[$key]->id;
        array_push($data3, $result[$key]->id);
      }
      
      $newUsers = DB::table('users')->whereIn('id',$data3)->get();
      return response()->json($newUsers,200);
     
     

    //   for ($x = 0; $x < count($result); $x++) {
    //   $data3[$x]= $result[$x]->id;
    // }
      
    //     return response()->json(
    //   [
    //     'status'=>200,
    //     'data3' => $data3,
    //     'message' => 'UserList'
    //   ]
    // );
  //return response()->json($data3,200);
}
}