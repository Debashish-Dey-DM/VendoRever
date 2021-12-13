<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
class testController extends Controller
{
    public function test()
    {
        return Group::all();
    }
}
