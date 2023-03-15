import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavLogo from '../public/navLogo.png'

const Footer = () => {
    return (
        <footer id="footer" className="w-full 2xl:h-screen text-center bg-no-repeat bg-cover bg-center bg-fixed bg-[#FAFAF2]">
            <div className="container px-6 pt-6 item-center mx-auto md:bottom-0 ">
                <div className="flex justify-center mb-6">
                <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='200'
            height='40'
            className='cursor-pointer'
          />
        </Link>
                </div>

                <div>
                    <form action="">
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="text-slate-100">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="md:mb-6">
                                <input
                                    type="text"
                                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-800 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                                    id="exampleFormControlInput1"
                                    placeholder="Email address" />
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button type="submit" className="inline-block px-6 py-2 border-2 bg-[#db9e30]  border-none text-slate-100 font-medium text-xs leading-tight uppercase rounded hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-6 text-slate-100">
                    <p>
                        Masjid AAIC is a non-profit tax-exempt organization that has been formed exclusively for educational, religious, and social purposes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 item-center text-slate-100">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 ">Menu</h5>

                        <ul className="list-none mb-0 text-slate-100">
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Home</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">About Us</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Programs</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Donate</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 text-slate-100 ">
                        <h5 className="uppercase font-bold mb-2.5">Services</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Counseling</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Funeral</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Nikkah</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 text-slate-100">
                        <h5 className="uppercase font-bold mb-2.5">Contact</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">614-272-9994</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">info@masjidabubakar.org</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">591 industrial Mile Road <br />
Columbus Ohio 43228</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">FaceBook</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-[#db9e30]">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-4 text-slate-100 border-t-2">
                © 2023 Copyright:
                <a className="text-slate-100 hover:text-[#db9e30]" href="">AAIC </a>
            </div>
        </footer>
    );
}

export default Footer