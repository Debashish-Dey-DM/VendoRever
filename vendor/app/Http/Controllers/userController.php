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
    $data['type']= 0;
    $data['status']= 1;

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
  public function updateUser(Request $req,$id){
    $data=array();
    $data['bkash']= $req->bkash;
    $data['nagad']= $req->nagad;
    $data['rocket']= $req->rocket;
    $update_user = DB::table('users')->where('id',$id)->update($data);
    if($update_user){
      return response()->json([
        'status'=>200,
        'user'=> $update_user,
        'message' => 'User Updated Successfully'
      ]);
    }
    else{
      return response()->json([
        'status' => 202,
        'message' => 'unsuccessfull'
      ]);
    }
    
  }
  public function friendList(Request $req, $id){
      $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_2','=' , 'users.id')
      ->select('friends.*','users.name')
      ->where('friends.user_id_1',$id )
      ->where('friends.type', '1')-> get();

      $friends2 = DB::table('friends')
      ->leftJoin('users','friends.user_id_1','=' , 'users.id')
      ->select('friends.*','users.name')
      ->where('friends.user_id_2',$id )
      ->where('friends.type', '1')-> get();
      $friends = $friends->merge($friends2);
      return response()->json($friends, 200);
      //return response()->json($friends,200);
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

public function testUserList ( Request $request, $id ){
     $users = DB::table('users')->where('status','1')->where('type','0')->get('id');
     $data = array();
     $data2 = array();
     $data3 = array();
     $data4 = array();
     $data5 = array();
    for ($x = 0; $x < count($users); $x++) {
      $data[$x]= $users[$x]->id;
    }
    

    $friends = DB::table('friends')
      ->leftJoin('users','friends.user_id_1','=' , 'users.id')
      ->select('friends.*','users.name')
      ->whereIn('friends.user_id_2',$data )
      ->where('friends.user_id_1',$id )-> get();
      
    $recieved = DB::table('friends')
      ->leftJoin('users','friends.user_id_2','=' , 'users.id')
      ->select('friends.*','users.name')
      ->whereIn('friends.user_id_1',$data )
      ->where('friends.user_id_2',$id )-> get();
  // ---------------------------------------------------------------    
    for ($x = 0; $x < count($friends); $x++) {
      $data2[$x]= $friends[$x]->user_id_2;
    }
    $result = array_diff($data, $data2);

      foreach ($result as $key => $value) {
        $result[$key] = (object) array('id' => $value);
        //echo $result[$key]->id;
        array_push($data3, $result[$key]->id);
      }
    // ---------------------------------------------------------------         
      for ($x = 0; $x < count($recieved); $x++) {
      $data4[$x]= $recieved[$x]->user_id_1;
      }
      $result2 = array_diff($data3, $data4);
      foreach ($result2 as $key => $value) {
        $result2[$key] = (object) array('id' => $value);
        //echo $result[$key]->id;
        array_push($data5, $result2[$key]->id);
      }
      

      


    // ---------------------------------------------------------------    
      $newUsers = DB::table('users')->whereIn('id',$data5)->get();
      return response()->json($newUsers,200);


}
public function MakeFriend(Request $req , $id){
   $toBeFriend =DB::table('friends')
                  ->where('id',$id)
                  ->update(['type' => '1']);
  
    if($toBeFriend){
      return response()->json([
        'status'=>200,
        'message' => 'Friend hogaya mere'
      ]);
    }
    else{
      return response()->json([
        'status' => 202,
        'message' => 'chal chutiye'
      ]);
    }
}
public function sentReq(Request $req,$id,$uid){
  $data=array();
  $data['user_id_1'] = $id;
  $data['user_id_2'] = $uid;
  $data['type'] = '0';
  $data['status'] = '1';
  $insert_friend = DB::table('friends')->insert($data);
  if($insert_friend){
    return response()->json([
      'status'=>200,
      'message' => 'Friend Request Send'
    ]);
  }
  else{
    return response()->json([
      'status' => 202,
      'message' => 'chal chutiye'
    ]);
  }
 
}
}