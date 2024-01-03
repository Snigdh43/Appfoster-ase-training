<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;

class userController extends Controller
{
    //
    public function index(){
       $usersD=users::all();
       $data=compact('usersD');
        return view('index')->with($data);
    }



}
