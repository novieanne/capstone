<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
  public function index(Request $request)
    {
        $tab = $request->query('tab', 'aboutUs');

        return Inertia::render('welcome', [
            'tab' => $tab,
        ]);
    }
}
