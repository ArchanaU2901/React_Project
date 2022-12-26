import React from 'react';
import { Link } from 'react-router-dom';

function Itemsbox({ title}) {
  return (


    <div className='items-center text-center  '>
    
      {/* <div className='w-full '>
        <img src={imgUrl}
          alt="Home" />
      </div>
   */}

      <div className='text-[#303030] font-[600] border-2 border-[#e5e5e5] hover:bg-[#C8A165] hover:text-[#fff]  md:pt-8 md:pb-8 md:pr-14 md:pl-14 bg-white'>
        <h3 className='border-[#e5e5e5] '> {title}</h3>
      </div>
    </div>
  );                                                            
}

export default Itemsbox;
// sm:pt-8 sm:pb-8 sm:pr-28 sm:pl-28
                                                      // @media (min-width: 640px)
                                                      // <style>
                                                      // .sm\:pl-28 {
                                                      //     padding-left: 16rem;
                                                      // }
                                                      // @media (min-width: 640px)
                                                      // <style>
                                                      // .sm\:pr-28 {
                                                      //     padding-right: 16rem;
                                                      // }
                                                      // @media (min-width: 640px)
                                                      // <style>
                                                      // .sm\:pb-8 {
                                                      //     padding-bottom: 8rem;
                                                      // }
                                                      // @media (min-width: 640px)
                                                      // <style>
                                                      // .sm\:pt-8 {
                                                      //     padding-top: 7rem;
                                                      //     font-size: 2em;