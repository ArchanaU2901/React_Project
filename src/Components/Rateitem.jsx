import React from 'react';
import { Link } from 'react-router-dom';

function Rateitem({ title }) {
  return (

    <div className='items-center text-center  '>
      <div className='text-[#303030] font-[600] border-2 border-[#e5e5e5] relative h-[312px] sm:pt-8 sm:pb-8 sm:pr-28 sm:pl-28 md:pt-8 md:pb-8 md:pr-14 md:pl-14 bg-gray-300'>
        <h3 className='border-[#e5e5e5] '> {title}</h3>
      </div>
    </div>
  );
}

export default Rateitem;
