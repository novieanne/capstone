import StudentList from "@/components/studentList";
import StudentMatched from "@/components/studentMatched";
import StudentPlaced from "@/components/studentPlaced";
import StudNav from "@/components/nav-studManagement";

export default function StudManagement({ tab }: { tab: string }) {
    return(
      <div className="p-8 bg-[#f3f3f3] min-h-screen">
    
      <StudNav activeTab={tab} />

      {tab === 'list' && <StudentList />}
      {tab === 'matched' && <StudentMatched />}
      {tab === 'placed' && <StudentPlaced />}
    </div>
    );
}
