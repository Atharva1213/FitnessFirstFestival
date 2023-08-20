import React from 'react'
import bg from '../Images/bg-img.jpg'
import logo from '../Images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function About() {
    return (
        <div id='about' className='relative h-[145vh] md:h-[100vh] lg:h-[120vh] 2xl:h-[100vh] sm:h-[100vh] w-full overflow-hidden bg-gray-800 text-white bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-black/70 to-black/20 lg:to-black/60' />
            <img className='absolute h-[220px] top-[8%] translate-x-[-50%] md:translate-x-0 left-[50%]
            md:absolute lg:absolute lg:left-[70%] lg:top-[30%] lg:h-[200px] md:left-[65%] md:top-[15%] md:h-[180px] sm:h-[120px] sm:right-[30%] sm:top-[20%]  2xl:h-[350px] 2xl:top-[15%]' src={logo} alt="" />
            <h1 className='absolute left-4 top-4 font-headingText text-2xl lg:text-2xl md:text-2xl sm:text-xl 2xl:text-4xl'>#<span className='text-orange-600 lg:text-2xl md:text-2xl 2xl:text-4xl'>Fitness</span><span className='text-white lg:text-2xl md:text-2xl 2xl:text-4xl'>First</span><span className='text-green-600 lg:text-2xl md:text-2xl 2xl:text-4xl'>Festival</span></h1>
            <div className="about-details absolute top-[30%] md:top-[15%] lg:top-[30%] left-[6%] w-[90%] md:w-[65%] lg:w-[65%] sm:w-[50%] 2xl:top-[20%]">
                <div className='flex flex-col gap-2 2xl:gap-6 '>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className='text-orange-600 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl '>Fit.</span></h1>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className=''>St<span className='text-blue-500 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>ro</span>ng.</span></h1>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className='text-green-600 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Enthusiastic.</span></h1>
                    <p className='text-base font-bannerfont mt-4 lg:text-base 2xl:text-xl md:text-xl sm:mt-8 md:mt-10 lg:mt-0 sm:text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis.</p>
                    <h1 className='text-6xl font-bannerfont mt-10 md:mt-0'>~</h1>
                </div>
                <p className='max-w-2xl text-base font-bannerfont text-white lg:text-sm 2xl:text-xl md:text-2xl sm:text-xs mt-32 md:mt-10 lg:mt-0' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et odit maxime excepturi, ullam enim aliquid nemo error nobis perspiciatis iste aperiam fuga fugiat qui quos molestias in asperiores quia iure repellat voluptatibus perferendis quisquam minima. Odit repudiandae ipsa quia vitae praesentium id dicta, nihil tempora quas totam repellendus tempore iure, aut voluptatibus earum consequatur nemo. Eius unde possimus provident quas, aperiam nemo laborum earum aliquid ipsa deleniti molestiae dolores quos sed aspernatur. Tenetur minus, natus autem molestiae fugit tempora odit assumenda voluptatum cumque nesciunt cupiditate voluptas. Impedit, dicta debitis, asperiores quia rem et eos eligendi vero quas, itaque maiores!</p>
            </div>
        </div>
    )
}

export default About
