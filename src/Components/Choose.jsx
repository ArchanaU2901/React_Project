import React from 'react';

const Choose = () => {
    return (
        <div className=''>
            <div>
                <div className='flex flex-col pb-20'>

                    <h1 className='text-center text-[45px] tracking-[3px] relative pt-[38px] font-[700]'>CHOOSE YOUR DEMO</h1>



                    <div className='md:flex flex-row m-auto justify-center items-center flex  flex-wrap '>
                        <div className='space-x-[2em] space-y-[1em]'>
                            <button className='border-[2px] pb-1 pt-1 pr-3 pl-3 text-center text-[#fff]  hover: bg-[#C8A165] shadow-gray-100 border-[#C8A165]'>All</button>
                            <button className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>HOME</button>
                            <button className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>SHOP</button>
                            <button className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>BLOG</button>
                            <button className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>OTHER</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
