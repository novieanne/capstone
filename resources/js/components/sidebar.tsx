import { Link, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { router } from '@inertiajs/react';


export default function Sidebar() {

  return (
    <div className="w-20 md:w-64 min-h-screen flex  bg-white shadow">
      <div>
        <div className="p-7">
          <p className="font-bold text-2xl">InternConnect</p>
        </div>
        <nav className="mt-4">
          <ul>
            <li className=" hover:bg-gray-300">
              <Link href={route('studpage', { tab: 'list' })} className="block p-4">
                Student
              </Link>
            </li>
            <li className=" hover:bg-gray-300">
              <Link href={route('hte')} className="block p-4">
                HTE
              </Link>
            </li>
            <li className=" hover:bg-gray-300">
              <Link href={route('reports', { tab: 'studentPlacement'})} className="block p-4">
                Reports
              </Link>
            </li>
            <div>
      </div>
          </ul>
        </nav>
      </div>

      
    </div>
  );
}
