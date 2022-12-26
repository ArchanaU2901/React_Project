import React from 'react';
import { useState } from 'react';
const DataFetching = () => {
 const [src, setSrc]=useState('');
 const getImage = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json();
  setSrc(data.message)
  console.log(data)
}

  return (
    <div>
      <h1>image generator</h1>
      <div>
        <button onClick={(e)=>getImage()}>get image</button>
      </div>
      <div>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default DataFetching;
