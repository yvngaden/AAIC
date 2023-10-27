import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navlogo from '../public/navLogo.png'
import Slideshow from '../components/Slideshow'


const about = () => {
  
  return (
    <>
      
      <div className='w-full h-screen text-slate-800 text-center '>
        <Slideshow/>
      </div>

      <div className='w-full h-screen text-slate-800 text-center md:mb-2 2xl:mb-20 '>
        <div className='md:w-full xl:w-3/4 2xl:w-full 2xl:h-screen mx-auto p-4 '>
          <div className='w-full items-center justify-center xl:mt-4 flex '>
            <Image
              src={Navlogo}
              alt='/'
              width='250'
              height='80'
              className='flex text-center item-center'
            />
          </div>
          <div className=' my-5'>
            <h1 className='py-6 decoration-slice'>Welcome to Masjid Abu Bakar</h1>
            <p>Masjid AAIC is a non-profit tax-exempt organization that has been formed exclusively for educational, religious, and social purposes. It is registered with the Internal Revenue Service under revenue code 501(c)(3). All of its activities are in accordance with the teachings of the Quran and following the teachings and traditions of Prophet Mohammed (Peace Be Upon Him). AAIC is a multi-ethnic, multi-racial, multi-lingual, non-sectarian, diverse, and open community committed to full and equal participation and involvement of men and women who are community members of AAIC and subscribe to accept its rules, regulations, and procedures.</p>
          </div>
          <div className=' my-2'>
            <h3>Mission:</h3>
            <p>All of its activities are in accordance with the teachings of the Quran and following the teachings and traditions of Prophet Muhammad (Peace Be Upon Him)</p>
          </div>
          <div className=' my-2'>
            <h3>Objective:</h3>
            <p>AAIC is a multi-ethnic, multi-racial, multi-lingual, non-sectarian, diverse, and open community committed to full and equal participation and involvement of men and women who are community members of AAIC and subscribe to accept its rule.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default about