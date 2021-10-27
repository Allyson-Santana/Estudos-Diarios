<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use Carbon\Carbon;

class UserController extends Controller
{
    private $objUser;
    private $date;

    public function __construct() 
    {
        $this->objUser = new UserModel();
        $this->date = new Carbon();
    }

    public function store(Request $request) : void
    {
      dd([$request->all(), $this->date->format('d-m-y')]);
    }

 
}
