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
    $section = $request->query('section');
    $company = $request->query('company');
    $search = $request->query('search');


    $query = Student::with('scores.competency.subcategory.category')
                ->orderBy('last_name');

    if ($tab === 'matched') {
        $query->where('status', 'matched');
    } elseif ($tab === 'placed') {
        $query->where('status', 'placed');
    }

    if($section){
      $query->where('section', $section);
    }

    if($company){
      $query->where('company', $company);  
    }


     $students = $query->paginate(10)->withQueryString();

    return Inertia::render('studentPage', [
        'tab'      => $tab,
        'students' => $students,
        'section' => $section,
        'company' => $company,
        'search'   => $search,
        'page' => $request->get('page', 1),
    ]);
  }



  public function approve(Student $student)
  {
    $student->update(['status' => 'placed']);

      return redirect()->route('studpage', ['tab' => 'matched']) 
        ->setStatusCode(303);
  }



  public function unmatch(Student $student)
  {
    $student->update(['status' => 'matched']);

     return redirect()->route('studpage', [
      'tab' => 'placed',
      'section' => request()->query('section'),
      'company' => request()->query('company'),
      'page' => request()->query('page'),
      ]) ->setStatusCode(303);
  }

  public function batchUnmatch (Request $request) {
    $ids = $request->input('ids', []);

    Student::whereIn('id', $ids)->update(['status' => 'matched']);

     return redirect()->route('studpage', [
      'tab' => 'placed',
      'section' => request()->query('section'),
      'company' => request()->query('company'),
       'page' => $request->query('page'),
     ]);
  }
}
