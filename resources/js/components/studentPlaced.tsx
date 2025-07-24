import { router, usePage } from '@inertiajs/react'
import { route } from 'ziggy-js'
import toast from 'react-hot-toast';
import { useState } from 'react';
import Modal from './modal';
import SortBySection from './sortBySection-placedTab';
import SortByCompany from './sortByCompany-placedTab';
import SearchBar from './searchBar';
import Pagination from './btn-paginate';



interface Student {
  id: number;
  last_name: string;
  first_name: string;
  middle_initial: string;
  section: string;
  specialization: string;
  company: string;
  suitability: number;
  scores?: Score[];
}

type Score = {
  id: number;
  score: number;
  competency: {
    name: string;
    subcategory: {
      name: string;
      category: {
        name: string;
      };
    };
  };
};

type PaginatedStudents = {
  data: Student[];
  total: number;
  from: number | null;
  to: number | null;
  next_page_url: string | null;
  prev_page_url: string | null;
};



export default function StudentPlaced( { tab }: { tab: string } ) {
  const { students, section: currentSection, company: currentCompany } = usePage<{
  students: PaginatedStudents;
  section?: string;
  company?: string;
  page?: number;
  }>().props;

  const query = new URLSearchParams(window.location.search);
  const currentPage = Number(query.get('page')) || 1;

  const [showExpand, setShowExpand] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const levelMap: Record<number, string> = {
    1: 'Novice',
    2: 'beginner',
    3: 'Advanced',
  }

  const groupScores = (score: Score[]) => {
    const grouped: {
      [category: string]: {
        [subcategory: string]: Score[];
      };
    } = {};

    score.forEach((score) => {
      const category = score.competency.subcategory.category.name;
      const subcategory = score.competency.subcategory.name;

      if (!grouped[category]) grouped[category] = {};
      if (!grouped[category][subcategory]) grouped [category][subcategory] = [];

      grouped[category][subcategory].push(score);
    });
       return grouped;
  }

  const [inputAmount, setInputAmount] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<Student[]>([]);

  const handlePreview = () => {
    if (inputAmount <= 0 || inputAmount > students.data.length) {
      toast.error('Invalid amount');
      return;
    }
    setSelectedBatch(students.data.slice(0, inputAmount));
    setShowModal(true);
  };

  const confirmUnmatch = () => {
  router.post(
    route('students.batchUnmatch') + `?tab=placed&section=${section}&company=${company}&page=${currentPage}`,
    { ids: selectedBatch.map((stud) => stud.id) },
    {
      preserveScroll: true,
      preserveState: false,
      onSuccess: () => {
        toast.success(`Successfully unmatched students`);
        setShowModal(false);
      },
      onError: () => {
        toast.error('Failed to unmatch students');
      }
    }
  );
};

  const [section, setSection] = useState(currentSection || '');
  const [company, setCompany] = useState(currentCompany || '');
  const [page, setPage] = useState(currentPage || 1);

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selected = e.target.value;
  setSection(selected);
  router.get(route('studpage'), {
    tab: 'placed',
    section: selected || undefined,
    company: company || undefined,
  }, { preserveScroll: false, preserveState: true });
};
   
const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selected = e.target.value;
  setCompany(selected);
  router.get(route('studpage'), {
    tab: 'placed',
    section: section || undefined,
    company: selected || undefined,
  }, { preserveScroll: false, preserveState: true });
};

  return (
    <>
    
      <div className='flex justify-center mt-4'>         
        <div className=' flex w-full bg-white p-4 space-x-4'>
          
          <SortBySection value={section} onChange={handleSectionChange}/>
          <SortByCompany value={company} onChange={handleCompanyChange}/>

          <div className='space-x-2 '>
            <input className='border p-2 rounded'
                type="number" 
                placeholder='enter amount'
                min={1}
                onChange={(e) => setInputAmount(Number(e.target.value))}
            />
            <button className='text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded'
                onClick={() => {
                  if(inputAmount > students.data.length) {
                    toast.error(`only have ${students.data.length} students available`)
                    return;
                  }
                  handlePreview();}} disabled={inputAmount <= 0 || inputAmount > students.data.length}
                >
                  CONFIRM
            </button>
         </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
        <div className='flex flex-col h-[70vh]' >
          
            <h1 className='font-semibold text-2xl'>Confirm Batch Unmatch?</h1>   
            
            <div className='flex-1 justify-center overflow-y-auto mt-4'>
              <table className='table-auto w-full'>
                <thead className="border-b-2 border-gray-200">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Last Name</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">First Name</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">M.I.</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Section</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Specialization</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Company</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Suitability (%)</th>
                </tr>
                </thead>
                <tbody>
                {selectedBatch.map((stud) => (
                  <tr key={stud.id} className="border-b border-gray-200 hover:bg-[#f3f3f3]">
                    <td className="p-3 text-sm font-normal ">{stud.last_name}</td>
                    <td className="p-3 text-sm font-normal">{stud.first_name}</td>
                    <td className="p-3 text-sm font-normal">{stud.middle_initial}</td>
                    <td className="p-3 text-sm font-normal">{stud.section}</td>
                    <td className="p-3 text-sm font-normal">{stud.specialization}</td>
                    <td className="p-3 text-sm font-normal">{stud.company}</td>
                    <td className="p-3 text-sm font-normal">{stud.suitability}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
                <div className='mt-4 flex justify-end space-x-4'>
                  <button className='text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded'
                     onClick={() => setShowModal(false)}
                  >
                        CANCEL
                    </button>
                    <button className='text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded'
                      onClick={confirmUnmatch}
                    >
                        CONFIRM
                    </button>
                </div>
        </div>
      </Modal>
      



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
              <tr  key={stud.id} className="border-b border-gray-200 hover:bg-[#f3f3f3]">
                <td className="p-3 text-sm font-normal ">{stud.last_name}</td>
                <td className="p-3 text-sm font-normal">{stud.first_name}</td>
                <td className="p-3 text-sm font-normal">{stud.middle_initial}</td>
                <td className="p-3 text-sm font-normal">{stud.section}</td>
                <td className="p-3 text-sm font-normal">{stud.specialization}</td>
                <td className="p-3 text-sm font-normal">{stud.company}</td>
                <td className="p-3 text-sm font-normal">{stud.suitability}</td>
                <td className="p-3 text-sm font-normal "> 
                    <button onClick={() => { 
                            setSelectedStudent(stud); 
                            setShowExpand(true);
                          }}
                            className="mr-3 text-sm bg-orange-400 hover:bg-orange-500 text-white py-1 px-2 rounded ">
                      EXPAND
                    </button>
                     <button
                        onClick={() => {
                          const url = route('students.unmatch', {
                            student: stud.id,
                          }) + `?tab=placed&page=${currentPage}&section=${section}&company=${company}`;
                        
                          router.patch(url, {}, {
                            onSuccess: () => {
                              toast.success('Successfully unmatched');
                            },
                            onError: () => {
                              toast.error('Error');
                            },
                            preserveScroll: true,
                            preserveState: false,
                          });
                        }}
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      >
                        UNMATCH
                      </button>
                </td>
              </tr>
              ))}      
            </tbody>    
          </table>
     </div>

    <Modal isOpen={showExpand} onClose={() => setShowExpand(false)}>
      {selectedStudent && (
          <div>
            <h1 className='font-semibold text-2xl '>
              {selectedStudent.first_name} {selectedStudent.middle_initial}. {selectedStudent.last_name}
            </h1>
             <div className='flex flex-col h-[70vh] mt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {selectedStudent.scores && selectedStudent.scores.length > 0 ? (
                  Object.entries(groupScores(selectedStudent.scores)).map(([categoryName, subcats]) => (
                  <div key={categoryName}>
                  <h2 className='font-semibold mb-2'>{categoryName}</h2>

                 {Object.entries(subcats).map(([subcatName, scores]) => (
                <div key={subcatName}>
                  <h3 className='text-red-500'>{subcatName}</h3>
                  <ul>
                    {scores.map((score) => (
                      <li key={score.id}>
                        - {score.competency.name}: {" "}
                        {categoryName === "Technical Skills"
                          ? `${score.score} - ${levelMap[score.score] || "unknown"}`
                          : `${score.score}%`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>no scores</p>
        )}
        </div>
      </div>
    </div> 
        )}
    </Modal>

    <Pagination
            from={students.from}
            to={students.to}
            total={students.total}
            prevPageUrl={students.prev_page_url}
            nextPageUrl={students.next_page_url}
         />
      
      </>
  );
}