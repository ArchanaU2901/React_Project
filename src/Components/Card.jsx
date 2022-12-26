import React from 'react';
import CardsItem from './CardsItem';
import card from '../data/card';
import { Link, Route } from 'react-router-dom';
// import Rtl from './Rtl';
// import Rtl from './Rtl';

console.log('link', card)


const Card = () => {

   const redirectLink=(link)=>{
      window.location.href=link;
   }
   return (

      <div className="flex flex-col md:flex-row items-center justify-center pb-[40vh] sm:pb-[30vh] md:m-25 md:pb-[20vh] ">
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {card.map(box => (
        <Link  onClick={()=>redirectLink(box.link)} >
                        <CardsItem

                        imgUrl={box.imgUrl}
                        title={box.title}
   
                     />
               
</Link>
            ))}
         </div>

        
      </div>

      

   );
}

export default Card;
