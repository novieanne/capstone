import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js'
import { router } from '@inertiajs/react'


export default function Sidebar(){
    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.post(route('logout'));
    };

    return(
          <>
          <div className="w-20 md:w-64">
                    <div className="flex justify-between items-center p-7">
                        <p className="font-bold text-2xl">InternConnect</p>
                    </div>      
                    <nav className="mt-4">
                        <ul>
                            <li className="flex items-center p-4 hover:bg-gray-300 " >
                                <Link href=""></Link>
                                Student
                            </li>
                            <li className="flex items-center p-4 hover:bg-gray-300 " >
                                HTE
                            </li>
                            <li className="flex items-center p-4 hover:bg-gray-300 " >
                                Placement
                            </li>
                            <li className="flex items-center p-4 hover:bg-gray-300 " >
                                Report
                            </li>
                             <li className="flex items-center p-4 hover:bg-gray-300 " >
                                <button onClick={handleLogout} >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                   
          </>
                
        

    );
}