
import { usePage } from '@inertiajs/react';
import AboutUs from '@/components/aboutUs';
import LandingNav from '@/components/nav-header';
import ContactUs from './contactUs';
import Login from '../pages/auth/login';
import Register from '@/pages/auth/register';

type Props = {
  tab: string;
};

export default function Landing({ tab }: Props){
   
    return (
     <>
     <div>
        <LandingNav activeTab={tab} />

        {tab === 'aboutUs' && <AboutUs />}
        {tab === 'contactUs' && <ContactUs/>}
        {tab === 'login' && <Login />}
        {tab === 'register' && <Register />}
     </div>
          
     </>
    );
}