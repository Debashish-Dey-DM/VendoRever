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
        $users = DB::table('users')->where('status','1')->where('type','0')->get();
         return view('users.userHome')->with('users',$users);
    
}
}