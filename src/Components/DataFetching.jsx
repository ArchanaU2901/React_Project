import React from 'react';
import { useState } from 'react';
const DataFetching = () => {
 const [src, setSrc]=useState('');
 const getImage = async()=>{
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json();
  setSrc(data.message)
  // console.log(data)
}

  return (
    <div>
      <h1 className='text-center font-[600] text-[2em] text-red-500 uppercase underline drop-shadow-2xl decoration-black'>Image Generator</h1>
      <div className='text-center mt-5 '>
        <button className='uppercase' onClick={(e)=>getImage()}>Get Image</button>
      </div>
      <div>
        <img src={src} alt="" />
      
      </div>
  </div>
  );
}

export default DataFetching;
