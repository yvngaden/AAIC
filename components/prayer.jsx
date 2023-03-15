import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import InsideImg from '../public/insidemasjid.jpeg'


function Events() {
    return (
        <div className='w-full md:h-screen xl:h-screen bg-[#FAFAF2] overflow-hidden'>
            <div className='text-sm w-full md:flex 2xl:flex-col mx-auto justify-evenly bg-[#FAFAF2]'>
                <div className='md:w-2/5 p-4 2xl:w-full'>
                    <h1 className=' text-base italic py-2 text-[#d4af37]'>ABUBAKAR ASIDDIQ ISLAMIC CENTER</h1>
                    <h1 className=' text-lg'>Welcome to Masjid AbuBakar</h1>
                    <p className='py-1 text-base'>Location:</p> 
                    <p className=' text-base'>591 Industrial Mile Rd, Columbus, OH 43228</p>
                </div>
                <div className='md:w-1/4 shadow-md p-4 bg-green-700 2xl:w-full'>
                    <h1 className='p-2 text-lg'>Download Our APP</h1>
                    <p className='p-2 text-base'>Don&#39;t forget to download AAIC Masjid App, where you can view current Jamat timings, events, donate online and more.</p>
                    <div className='p-2 flex justify-evenly'>
                        <button className='bg-[#d4af37] px-6 py-3 rounded-md text-slate-200 hover:scale-105 ease-in duration-300'>IOS</button>
                        <button className='bg-[#d4af37] px-6 py-3 rounded-md text-slate-200 hover:scale-105 ease-in duration-300'>Android</button>
                    </div>
                </div>
                
            </div>
            <div className=' w-full my-10 mx-auto justify-around items-center md:flex 2xl:flex-col  2xl:justify-center '>
                <div className='md:w-2/4 shadow-slate-300 shadow-md p-4 2xl:w-full'>
                    <h1 className='p-4 text-gray-800 '>Who we are</h1>
                    <p className='p-4 text-gray-800 '>
                    Masjid AAIC is a non-profit tax-exempt organization that has been formed exclusively for educational, religious, and social purposes. It is registered with the Internal Revenue Service under revenue code 501(c)(3). All of its activities are in accordance with the teachings of the Quran and following the teachings and traditions of Prophet Mohammed (Peace Be Upon Him). AAIC is a multi-ethnic, multi-racial, multi-lingual, non-sectarian, diverse, and open community committed to full and equal participation and involvement of men and women who are community members of AAIC and subscribe to accept its rules, regulations, and procedures.
                    </p>
                    <Link href="/about">
                        <button  className='bg-[#d4af37] p-4 m-4 rounded-md hover:scale-105 ease-in duration-300 '>Learn More</button>
                    </Link>
                </div>
                <div className='md:w-2/5 shadow-slate-200 shadow-md bg-slate-200 2xl:w-full '>
                <Image
                  className='rounded-xl md:hover:scale-105 ease-in duration-300 2xl:m-4 2xl:hover:none '
                  src={InsideImg}
                  alt='/'
                />
                </div>
                

            </div>
        </div>
    );
}

export default Events