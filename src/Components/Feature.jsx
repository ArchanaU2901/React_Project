import React from 'react';

const Feature = () => {
  return (
    <div>
      <h1 className='text-center text-[30px] uppercase font-[600]'>Hurst Feature</h1>
      <p className='text-center'>There are so many reasons to choose hurst, here are a few items:</p>
      <div className='flex gap-[16rem] absolute left-[34px]' >
        <ul>
            <li>
            Valid HTML5 & CSS3
            </li>
        </ul>

        <ul>
            <li>
            NEAT, CLEAN AND SIMPLE DESIGN
            </li>
        </ul>

        <ul>
            <li className='text-center'>
            CREATIVE AND MODERN FLAT DESIGN
            </li>
        </ul>

        <ul>
            <li className='text-center'>
            SHORTCODE READY
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Feature;
