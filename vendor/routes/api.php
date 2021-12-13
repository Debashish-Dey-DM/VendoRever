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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/user/Homepage','userController@index');
Route::get('/user/UserList','userController@userList');
Route::post('/user/UserList/{id}','userController@updateUser');
Route::post('/signup','userController@createUser');
Route::post('/signin','userController@signin');
// Route::get('/friends/{id}/{fid}','userController@MakeFriend');
Route::get('/friendList/{id}','userController@friendList');
Route::get('/RequestSent/{id}','userController@RequestSent');
Route::get('/friendRequest/{id}','userController@friendRequest');
Route::get('/UserList/{id}','userController@testUserList');
Route::post('/accept/{id}','userController@MakeFriend');
//Route::post('/reject/{id}','userController@RejectFriend');
Route::post('/sent/{id}/{uid}','userController@sentReq');

//Route::get('/UserList/{id}','userController@testUserList2');

//Group Routes
Route::post('/createGroup/{id}','groupController@createGroup');
Route::get('/groupList/{id}','groupController@groupList');
Route::get('/group/{id}','groupController@group');