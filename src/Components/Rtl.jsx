// import React from 'react';

// import Shortcode from './Shortcode';

// const Rtl = () => {
//     return (
//         <div className='flex flex-col md:flex-row items-center justify-center sm:pb-[80vh] sm:pt-[77vh] pb-[80vh] h-[10vh]  w-full md:pt-[5em] '>
//             <div className='bg-[#C8A165] h-[12vh]  w-full md:p-20  sm:pb-[2em] flex flex-col md:flex-row items-center justify-center'>
//                 <div className='h-[10vh] w-full sm:text-center pb-[2em] sm:pb-[1em]  text-white '>
//                     <h1 className='text-[36px] font-[500] '>RTL Version Included</h1>
//                     <span>Arabic, Hebrew, Persian, Syriac, Sindhi, Urdu Ect..</span>
//                 </div>
//                 <div className='h-[10vh] w-full md:pl-[38rem] sm:text-center sm:pb-[1em]'>
//                     <button className='bg-[#fff] border-[#fff] pt-2 pb-2 pl-6 pr-6 text-center md:bg-[#fff] md:border-[#fff] md:pt-2 md:pb-2 md:pl-6 md:pr-6'>SEE RTL DEMO</button>
//                 </div>

//             </div>

//             <Shortcode />

//         </div>
//     );
// }

// export default Rtl;
import React from 'react';

const Rtl = () => {
  return (
    <div>
      <div>
        <div className='bg-[#c8a165] flex-row flex flex-col md:flex-row m-auto md:p-[10vh] md:top-0 p-[10vh] relative top-[-10em]'>
          <h1 className='text-[#fff] font-[600] text-[36px] text-center'>RTL Version Included</h1>
          <button className=' bg-[#fff] text-[#c8a165] text-[15px] pl-[3em] sm:pl-[0em] sm:pr-[0] sm:block sm:h-[4em] pr-[3em] pb-[1em] pt-[1em] ml-[1em] lg:ml-[25em] md:ml-[8em] md:pl-[3em] md:pr-[3em] md:pb-[1em] md:pt-[1em]'>SEE RTL DEMO</button>
        </div>

      </div>

    </div>
  );
}

export default Rtl;
