import React from 'react';
import { Link } from 'react-router-dom';

function CardsItem({ title, imgUrl,link }) {
  return (


    <div className='items-center text-center shadow-2xl  shadow-gray-300  md:hover:shadow-2xl md:hover: shadow-gray-400 md:hover: transition-[4s] sm:hover:shadow-2xl sm: hover:shadow-black sm: hover:transition-[4s]'>
      <Link href={link}>
      <div className='w-full '>
        <img src={imgUrl}
          alt="Home" />
      </div>
      </Link>

      <div className='text-[#303030] font-[600]'>
        <h3> {title}</h3>
      </div>
    </div>
  );
}

export default CardsItem;
