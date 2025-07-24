import StudNav from '@/components/nav-studManagement';
import Sidebar from '@/components/sidebar';
import { usePage } from '@inertiajs/react';

type Props = {
  tab?: string;
}

export default function StudentPage(){
  const { tab = 'list' } = usePage().props as Props;

    return(
        <>
        <div className='flex bg-[#f3f3f3]  '> 
            <Sidebar/>

          <div className='flex-1 p-4'>
            <StudNav tab={tab} activeTab={tab}  />
          </div>
        </div>
        </>
    )
}




