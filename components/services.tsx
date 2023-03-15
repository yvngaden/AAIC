import React from 'react'
import { FaMosque } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {FaPrayingHands} from 'react-icons/fa'
import {BiBookHeart} from 'react-icons/bi'
const services = () => {
    return (
        <div>
            <div className='w-full md:h-screen  2xl:h-screen items-center md:mt-0 md:pt-40 bg-[#FAFAF2]'>
                <div>
                    <h1 className=' text-center py-4'>Our Services</h1>
                </div>
                <div className='w-full mx-auto p-2 md:flex justify-evenly 2xl:justify-center 2xl:flex-col'>
                    <div className='md:w-1/5 2xl:w-full text-center shadow-slate-300 shadow-md p-4 bg-[#FAFAF2]'>
                        <div className='flex mx-auto w-20 h-20 text-[#db9e30]'>
                        <BsFillChatDotsFill size='5.0rem' />
                        </div>
                        <h1 className=' text-2xl'>Counseling</h1>
                        <p className=' text-slate-600'>Counseling appointments are usually scheduled during the Imam’s Office Hours at AAIC or over the phone. For special circumstances and emergencies please contact the Imam </p>
                        <button className='bg-[#db9e30] px-6 py-3 mt-9 rounded-md text-slate-200 hover:scale-105 ease-in duration-300'>Learn More </button>
                    </div>
                    
                    <div className='md:w-1/5 2xl:w-full text-center shadow-slate-300 shadow-md p-4 bg-[#FAFAF2]'>
                        <div className='flex mx-auto w-20 h-20 text-[#db9e30]'>
                        <FaPrayingHands size='5.0rem' />
                        </div>
                        <h1 className=' text-2xl'>Funeral</h1>
                        <p className=' text-slate-600'>We understand that losing a loved one is a time of grief, with many arrangements to consider. In order to make the process as easy as possible, we are prepared to assist you..</p>
                        <button className='bg-[#db9e30] px-6 py-3 mt-9 rounded-md text-slate-200 hover:scale-105 ease-in duration-300'>Learn More </button>
                    </div>
                    
                    <div className='md:w-1/5 2xl:w-full text-center shadow-slate-300 shadow-md p-4 bg-[#FAFAF2]'>
                        <div className='flex mx-auto w-20 h-20 text-[#db9e30]'>
                        <BiBookHeart size='5.0rem' />
                        </div>
                        <h1 className=' text-2xl'>Nikkah</h1>
                        <p>Nikah is an act worship. In Islam Nikah is an agreement and contract between husband and wife in accordance to the Qur’an and Sunnah of the Holy Prophet Mohammed (Peace be upon Him).</p>
                        <button className='bg-[#db9e30] px-6 py-3 mt-2 rounded-md text-slate-200 hover:scale-105 ease-in duration-300'>Learn More </button>
                    </div>
                    
                    <div className='md:w-1/5 2xl:w-full text-center shadow-slate-300 shadow-md p-4 bg-[#FAFAF2]'>
                        <div className='flex mx-auto w-20 h-20 text-[#db9e30]'>
                        <FaMosque size='5.0rem' />
                        </div>
                        <h1 className=' text-2xl'>Jummah</h1>
                        <p>Jummah Services at AAIC.
First Kuthbah: 12:30pm – Arabic & Somali
                            Second Kuthbah: 1:30pm – English</p>
                            <button className='bg-[#db9e30] px-6 py-3 mt-20 rounded-md text-slate-200 hover:scale-105 ease-in duration-300 '>Learn More </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default services