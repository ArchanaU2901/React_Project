import React from 'react';

const Herosection = () => {
  return (
    <div>
      {/* 90
      80 */}
      <div className=' bg-[#f8f8f8] pb-14 ' >
        <div >
          <div className=' flex flex-col justify-center items-center  '>

            <h1 className='font-bold text-[50px] text-center leading-loose '>HURST</h1>
            <h2 className='text-center text-[30px] font-[450] '>Best Furniture eCommerce Template For Your Shop</h2>
            <h3 className='text-[16px] text-[#303030] text-center p-5 md:leading-[6] mt-[-1rem] '>40+ HTML PAGE + 14 SHORTCODE + MEGAMENU</h3>

            <div className='flex align-middle mx-auto md:flex-row flex-col  '>
              <button className='mx-10 border-2 pr-[40px] pl-[40px] pt-[10px] pb-[10px] leading-[1] align-middle bg-black text-[#fff] border-black hover:border-[#C8A165] hover:bg-[#C8A165] ' type="button">BUY NOW</button>
              <button className='text-center border-2 pr-[37px] pl-[37px] pt-[10px] pb-[10px] leading-[1] align-middle bg-black text-[#fff] border-black hover:border-[#C8A165] hover:bg-[#C8A165] md:mt-0 mt-8' type="button">VIEW ALL DEMO</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Herosection;
