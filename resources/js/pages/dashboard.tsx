import Sidebar from '@/components/sidebar';
import { usePage } from '@inertiajs/react';
import route from 'ziggy-js';
import StudManagement from '../components/studentManagement';

type Props = {
  tab?: string;
}

export default function Dashboard(){
  const { tab = 'list' } = usePage().props as Props;

    return(
        <>
        <div className='flex'> 
            <Sidebar/>

          <div className='flex-1'>
            <StudManagement tab={tab}/>
          </div>
        </div>
        </>
    )
}




