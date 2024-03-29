import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/navLogo.png'
import { useRouter } from 'next/router';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='container flex justify-between items-center w-full h-full px-3 2xl:px-16 '>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='200'
            height='40'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:text-[#d4af37]'>
              <Link href="/" className={router.pathname != "/" ? "active" : "text-[#d4af37]"}>
                  Home
              </Link>
            </li>
            <li className='ml-10 text-sm uppercase  hover:text-[#d4af37]'>
              <Link href='/about' className={router.pathname != "/about" ? "active" : "text-[#d4af37]"}>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase  hover:text-[#d4af37]'>
            <Link href='/servicesPage' className={router.pathname != "/servicesPage" ? "active" : "text-[#d4af37]"}>Service</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#d4af37]'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#d4af37]'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src={NavLogo}
                  width='200'
                  height='100'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-[#d4af37] my-4'>
              
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/' className={router.pathname != "/" ? "active" : "text-[#d4af37]"}>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d4af37]'>
                  Home
                </li>
              </Link>
              <Link href='/about' className={router.pathname != "/about" ? "active" : "text-[#d4af37]"}>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d4af37]'>
                  About
                </li>
              </Link>
              <Link href='/servicesPage' className={router.pathname != "/servicesPage" ? "active" : "text-[#d4af37]"} >
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d4af37]'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d4af37]'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#d4af37]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-14'>
              <p className='uppercase tracking-widest text-[#d4af37] hover:text-[#d4af37]'>
                591 Industrial Mile Rd, Columbus, OH 43228
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
