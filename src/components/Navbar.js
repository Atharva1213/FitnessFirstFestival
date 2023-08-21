import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
export default function Navbar() {
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState(false);

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('orange-500')
    const [bg, setBg] = useState('slate-800/60')
    const [border, setBorder] = useState('2')
    const [borderCol, setBorderCol] = useState('[#F94C10]')
    const [type, setType] = useState('fixed')



    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setBg('#ff0054')
                setColor('#ff0054');
                setTextColor('white');
                setBorder('2')
                setType('fixed')
                setBorderCol('white')

            } else {
                setBorder('2')
                setBg('slate-800/60')
                setColor('transparent');
                setTextColor('orange-600');
                setType('static')
                setBorderCol('[#F94C10]')

            }
        };

        window.addEventListener('scroll', changeColor, { passive: true });

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    useEffect(() => {
        const body = document.querySelector('body');
        if (nav) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [nav]);

    const handleNav = () => {
        setNav(!nav)
        setType('static')


    }




    const handleAboutUsHover = () => {
        setShowAboutUsDropdown(true);
    };

    const handleAboutUsLeave = () => {
        setShowAboutUsDropdown(false);
    };
    return (
        <>
            <div style={{ backgroundColor: `${color}`, transition: `background-color 0.3s ease`, position: `${type}` }} className={`z-[50] navbar text-white flex justify-between px-20 py-8 font-bannerfont font-semibold text-lg md:static md:w-full `}>
                <ul className={`tagline border-${border} border-${borderCol} bg-${bg}`}>
                    <h2 className={`tag py-5 px-5 text-${textColor}`}><span className='text-2xl'>--</span> Commit To Be Fit.</h2>
                    <GiHamburgerMenu onClick={handleNav} className={`icon lg:hidden text-2xl z-50`} />

                </ul>
                <ul className={`nav-items flex w-[36rem] bg-slate-900/60 text-white rounded-sm border border-1 border-${borderCol}`} >
                    <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>Home</li>
                    <li
                        className='relative group py-5 px-8 w-[9rem] hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'
                        onMouseEnter={handleAboutUsHover}
                        onMouseLeave={handleAboutUsLeave}
                    >
                        About Us
                        {showAboutUsDropdown && (
                            <div className='absolute font-thin text-orange-600 mt-5 bg-black p-2 shadow-md left-0 w-[9rem]'>
                                <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>About</a>
                                <a href='/about/team' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Taskforce</a>
                                <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Why pfffy</a>
                                <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Contact</a>
                            </div>
                        )}
                    </li>
                    <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>Calendar</li>
                    <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>Contact Us</li>
                </ul>

            </div>
            <div className={nav ? `overflow-auto mobile-nav lg:hidden fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100%] sm:w-[60%] flex flex-col justify-start gap-12 pt-20 items-center ease-in duration-300 bg-pink-700 z-[100000001] mobile-nav ` : `overflow-auto mobile-nav lg:hidden fixed top-0 left-[-100%] right-0 bottom-0 h-[100vh] w-[100%] flex flex-col justify-start gap-12 pt-20 items-center ease-in duration-300 bg-pink-700 z-[100000001] `}>
                <AiOutlineClose size={30} onClick={handleNav} className='icon lg:hidden text-white font-bold absolute top-[4%] right-[10%] z-[10000000]' />
                <img className='h-[25%]' src={logo} alt="" />

                <ul className='text-white text-3xl sm:text-4xl flex flex-col gap-8 sm:gap-16 items-center justify-center font-bannerFont2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Activities</li>
                </ul>
            </div>
        </>

    )
}
