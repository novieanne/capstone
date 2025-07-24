import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import StudentList from "@/components/studentList";
import StudentMatched from "@/components/studentMatched";
import StudentPlaced from "@/components/studentPlaced";

type Props = {
  activeTab: string;
   tab: string;
};

export default function StudNav({ tab, activeTab }: Props) {
    return(
        <>
        
        <header className='flex w-auto shadow bg-white h-20 items-center justify-between px-8'>
             <h1 className="text-2xl font-bold "
             >
              Student Management
             </h1>
            <nav className='space-x-6 text-[16px] '>          
                <Link className={activeTab === 'list' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('studpage', {tab: 'list'})}
                >
                    List
                </Link>
                <Link className={activeTab === 'matched' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('studpage', {tab: 'matched'})}
                >
                    Matched
                </Link>
                <Link className={activeTab === 'placed' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('studpage', {tab: 'placed'})}
                >
                    Placed
                </Link>
            </nav>
       </header>

       <div>
            {tab === 'list' && <StudentList tab={tab} />}
            {tab === 'matched' && <StudentMatched tab={tab} />}
            {tab === 'placed' && <StudentPlaced tab={tab} />} 
        </div>

        </>
    );
}