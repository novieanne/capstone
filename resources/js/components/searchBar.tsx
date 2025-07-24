import React from 'react';


export default function SearchBar(){
    return (
    <div className='space-x-2'>
      <input 
        className='border p-2 rounded'
        type="text"
        placeholder="Search by name"
      />
    
    </div>
    );
}
