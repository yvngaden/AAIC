import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageOne from '../public/aboutPic1.jpg'
import ImageTwo from '../public/insidemasjid.jpeg'
import Navlogo from '../public/navLogo.png'

const about = () => {
  return (
    <>
      <div className='w-full h-screen text-slate-800 text-center '>
        <div className=' w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className=' w-full my-10 mx-auto justify-around items-center md:flex 2xl:flex-col  2xl:justify-center '>
            <div className='md:w-2/5 shadow-slate-200 shadow-md bg-slate-200 2xl:w-full '>
              <Image
                className='rounded-xl md:hover:scale-105 ease-in duration-300 2xl:m-4 2xl:hover:none '
                src={ImageOne}
                alt='/'
              />
            </div>
            <div className='md:w-2/5 shadow-slate-200 shadow-md bg-slate-200 2xl:w-full '>
              <Image
                className='rounded-xl md:hover:scale-105 ease-in duration-300 2xl:m-4 2xl:hover:none '
                src={ImageOne}
                alt='/'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-screen text-slate-800 text-center '>
        <div className='w-3/5 h-full mx-auto p-4 '>
          <div className='w-full items-center mx-auto xl:mt-4 flex '>
          <Image
            src={Navlogo}
            alt='/'
            width='200'
            height='40'
            className='cursor-pointer flex justify-center'
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