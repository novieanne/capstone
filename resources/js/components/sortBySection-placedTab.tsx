
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function SortBySection({ value, onChange }: Props) {

  return(
    <>
      <div>
        <form className='border p-2 rounded'>
          <select 
            value={value}
            onChange={onChange}
          >
            <option value="">all section</option>
            <option value="3A">3A</option>
            <option value="3B">3B</option>
            <option value="3C">3C</option>
          </select>
        </form>          
      </div>
    </>
  );
}