
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SortByCompany({ value, onChange }: Props) {

    return(
        <div>
            <form className='border p-2 rounded'>
                <select 
                    value={value}
                    onChange={onChange}
                >
                    <option value="">All Companies</option>
                    <option value="Company A">Company A</option>
                    <option value="Company B">Company B</option>
                    <option value="Company C">Company C</option>
                </select>
            </form>          
        </div>
    );
}