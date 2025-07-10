import { usePage } from '@inertiajs/react';
import Modal from './modal';
import { useState } from 'react';

type Student = {
  id: number;
  last_name: string;
  first_name: string;
  middle_initial: string;
  section: string;
  specializatio: string;
};

export default function StudentList(){
  const { students } = usePage().props as any;
  const [showExpand, setShowExpand] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return(
    <>
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
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stud: any) => (
              <tr key={stud.id} className="border-b border-gray-200 hover:bg-[#f3f3f3]">
                <td className="p-3 text-sm font-normal ">{stud.last_name}</td>
                <td className="p-3 text-sm font-normal">{stud.first_name}</td>
                <td className="p-3 text-sm font-normal">{stud.middle_initial}</td>
                <td className="p-3 text-sm font-normal">{stud.section}</td>
                <td className="p-3 text-sm font-normal">{stud.specialization}</td>
                <td className="p-3 text-sm font-normal "> 
                    <button onClick={() =>{setSelectedStudent(stud); setShowExpand(true)}}
                            className="mr-3 text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded ">
                      EXPAND
                    </button>
                     <button onClick={() =>{setSelectedStudent(stud); setShowEdit(true)}}
                             className="text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-5 rounded ">
                      EDIT
                    </button>
                </td>
              </tr>
                ))}
            </tbody>        
          </table>
     </div>
    </div>
    
    <Modal isOpen={showExpand} onClose={() => setShowExpand(false)}>
        <div>
               <h1>yo</h1> 
        </div>
    </Modal>

    <Modal isOpen={showEdit} onClose={() => setShowEdit(false)}>
        <div>
               <h1>ayo</h1> 
        </div>
    </Modal>

    </>
  );
}