<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function index(Request $request){

        $tab  = $request->query('tab', 'studentPlacement');

         return Inertia::render('reports', [
            'tab' => $tab,
        ]);
    }
}
