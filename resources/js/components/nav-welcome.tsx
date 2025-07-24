import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

type Props = {
  activeTab: string;
};


export default function LandingNav({ activeTab }: Props) {
    return (
        <header className='flex w-auto shadow h-14 items-center justify-between px-8'>
             <h3 className='font-bold text-xl text-[#FF9D41]'
                >
                InternConnect 
             </h3>
            <nav className='space-x-6 text-[16px] '>          
                 <Link className={activeTab === 'aboutUs' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('welcome', {tab: 'aboutUs'})}
                >
                    About Us
                </Link>
                <Link className={activeTab === 'contact' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('welcome', {tab: 'contactUs'})}
                >
                    Contact Us
                </Link>
                <Link className={activeTab === 'login' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('welcome', {tab: 'login'})}
                >
                    Login
                </Link>
            </nav>
       </header>
    );
}