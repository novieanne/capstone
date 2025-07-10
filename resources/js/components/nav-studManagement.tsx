import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

type Props = {
  activeTab: string;
};

export default function StudNav({ activeTab }: Props) {
    return(
        <>
        <header className='flex w-auto shadow bg-white h-20 items-center justify-between px-8'>
             <h1 className="text-2xl font-bold "
             >
              Student Management
             </h1>
            <nav className='space-x-6 text-[16px] '>          
                <Link className={activeTab === 'list' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('dashboard', {tab: 'list'})}
                >
                    List
                </Link>
                <Link className={activeTab === 'matched' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('dashboard', {tab: 'matched'})}
                >
                    Matched
                </Link>
                <Link className={activeTab === 'placed' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('dashboard', {tab: 'placed'})}
                >
                    Placed
                </Link>
            </nav>
       </header>
        </>
    );
}