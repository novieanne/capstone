import Sidebar from '@/components/sidebar';
import { usePage } from '@inertiajs/react';
import ReportsNav from '@/components/nav-reports';

type Props = {
    tab?: string;
}

export default function Reports() {
     const { tab = 'studentPlacement' } = usePage().props as Props;
     
    return (
        <>
       <div className='flex bg-[#f3f3f3]'> 
                   <Sidebar/>
       
                 <div className=' flex-1 p-4'>
                  <ReportsNav tab={tab} activeTab={tab}/>
                 </div>
        </div>
        </>
    );
}