import React from 'react';
import shortcode from '../data/shortcode';
import Itemsbox from './Itemsbox';
import { Link, Route } from 'react-router-dom';

const Items = () => {
   return (

      <div className="flex flex-col md:flex-row items-center justify-center md:absolute pt-[5em] md:pt-[5em] md:left-[5em]   ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 ">
            {shortcode.map(box => (

               <Itemsbox

                  title={box.title}
               />
            ))}
         </div>
      </div>
   );
}

export default Items;
