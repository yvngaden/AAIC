import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-main bg-no-repeat bg-cover bg-center bg-fixed from-black'>
      <div className=' w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-2 text-gray-200 '>Masjid Abu Bakr</h1>
          <p className='py-4 text-gray-200 sm:max-w-[70%] m-auto '>
            Masjid AAIC is a non-profit tax-exempt organization that has been formed
            exclusively for educational, religious, and social purposes. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
