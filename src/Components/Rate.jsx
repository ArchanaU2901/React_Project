import React from 'react';
import rate from '../data/rate';
import Rateitem from './Rateitem';
import { Link, Route } from 'react-router-dom';

const Rate = () => {

   return (
      <div className="flex flex-col md:flex-row items-center justify-center mt-[10em] mb-[3em] pl-2em pr-2em md:mt-[52em] md:mb-[3em] md:block">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 ">
            {rate.map(box => (
               <Rateitem

                  rate={box.rate}
                  title={box.title}
               />
            ))}
         </div>
      </div>
   );
}

export default Rate;
