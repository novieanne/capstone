import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import ReportStudPlacement from '@/components/reports-studentPlacement';
import ReportHte from '@/components/reports-hte';  
import ReportLogs from '@/components/reports-logs';


type Props = {
  activeTab: string;
   tab: string;
};

export default function ReportsNav({ tab, activeTab }: Props) {
    return( 
        <>
            <header className='flex w-auto shadow bg-white h-20 items-center justify-between px-8'>
             <h1 className="text-2xl font-bold "
             >
                Student Placement
             </h1>
            <nav className='space-x-6 text-[16px] '>          
                <Link className={activeTab === 'studentPlacement' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('reports', {tab: 'studentPlacement'})}
                >
                    Student Placement
                </Link>
                <Link className={activeTab === 'hte' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('reports', {tab: 'hte'})}
                >
                    HTE
                </Link>
                <Link className={activeTab === 'logs' ? 'underline font-semibold' : 'hover:underline'}
                    href = {route('reports', {tab: 'logs'})}
                >
                    Logs
                </Link>
            </nav>
       </header>

        <div>
            {tab === 'studentPlacement' && <ReportStudPlacement tab={tab} />}
            {tab === 'hte' && <ReportHte tab={tab} />}
            {tab === 'logs' && <ReportLogs tab={tab} />} 
        </div>
        </>
    );
}
