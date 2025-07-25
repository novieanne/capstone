import { router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Pagination from './btn-paginate';
import { toast } from 'react-hot-toast';
import StudNav from './nav-studManagement';

interface Student {
  id: number;
  last_name: string;
  first_name: string;
  middle_initial: string;
  section: string;
  specialization: string;
  company: string;
  suitability: number;
}

interface PaginatedStudents<T> {
   data: T[];
  current_page: number;
  last_page: number;
  total: number;
  from: number;
  to: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}


export default function StudentMatched( { tab }: { tab: string } ) {
  const { students } = usePage<{ students: PaginatedStudents<Student> }>().props;

 if (!students?.data) return <p>No matched students found.</p>;

  return (
    <div className="">
      

     <div className="flex justify-center mt-8">
          <table className="w-full bg-white shadow-md">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Last Name</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">First Name</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">M.I.</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Section</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Specialization</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Company</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Suitability (%)</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.data.map((stud) => (
              <tr key={stud.id} className="border-b border-gray-200 hover:bg-[#f3f3f3]">
                <td className="p-3 text-sm font-normal ">{stud.last_name}</td>
                <td className="p-3 text-sm font-normal">{stud.first_name}</td>
                <td className="p-3 text-sm font-normal">{stud.middle_initial}</td>
                <td className="p-3 text-sm font-normal">{stud.section}</td>
                <td className="p-3 text-sm font-normal">{stud.specialization}</td>
                <td className="p-3 text-sm font-normal">{stud.company}</td>
                <td className="p-3 text-sm font-normal">{stud.suitability}</td>
                <td className="p-3 text-sm font-normal "> 
                    <button 
                            className="mr-3 text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded ">
                      EXPAND
                    </button>
                     <button onClick={() => router.patch(route('students.approve', {student: stud.id}), {}, {
                             onSuccess: () => {
                              toast.success('successfully matched');
                             }, onError: () => {
                              toast.error('error')
                             },
                             preserveScroll: true,
                             preserveState: false,
                     })}
                            className="text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded ">
                      APPROVE
                    </button>
                </td>
              </tr>
                ))}

            </tbody>
            
          </table>
     </div>
     <Pagination
             from={students.from}
             to={students.to}
             total={students.total}
             prevPageUrl={students.prev_page_url}
             nextPageUrl={students.next_page_url}
          />
    </div>
  );
}