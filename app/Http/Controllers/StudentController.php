<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class StudentController extends Controller
{
  public function index(Request $request)
  {
    $tab  = $request->query('tab', 'list');
    
 
    $query = Student::orderBy('last_name');

    if ($tab === 'matched') {
        $query->where('status', 'matched');
    } elseif ($tab === 'placed') {
        $query->where('status', 'placed');
    }

     $students = $query->get();

    return Inertia::render('dashboard', [
        'tab'      => $tab,
        'students' => $students,
    ]);
  }

  public function approve(Student $student)
  {
    $student->update(['status' => 'placed']);

    //return Inertia::location(route('dashboard', ['tab' => 'matched']));
      return redirect()->route('dashboard', ['tab' => 'matched']) 
        ->setStatusCode(303);
       

  }

  public function unmatch(Student $student)
  {
    $student->update(['status' => 'matched']);

    //return Inertia::location(route('dashboard', ['tab' => 'placed']));
     return redirect()->route('dashboard', ['tab' => 'placed']) ->setStatusCode(303);
  }


}
