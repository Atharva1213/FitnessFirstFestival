import React from 'react';
import bg from '../Images/timBg.jpg';
import food from '../Images/food.jpg'
import trekking from '../Images/trekking.jpg'
import marathon from '../Images/marathon.jpg'
import Card from '../components/Card'
import Navbar from './Navbar';
import { Link } from 'react-scroll';

export default function Banner() {

    return (
        <div>
            <div id="home" className='banner h-screen w-full bg-cover lg:bg-center relative' style={{ backgroundImage: `url(${bg})` }}>
                <div id="alert-1" className="hidden gap-2 xl:block absolute top-6 left-[25%] items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium">
                        This site is still <span className="font-semibold">Under Develompent, so some tabs,buttons,components wont work</span>.
                    </div>
                </div>

                <Navbar />

                <div className="title z-20 text-white absolute leading-1 text-left left-[4%] lg:top-[17%] top-[24%]">
                    <div className='title-content flex flex-col gap-4'>
                        <h3 className='title-pccoe text-lg lg:text-2xl pl-1 text-white stroke-black lg:font-medium font-bannerFont2'>Pimpri Chinchwad College of Engineering's</h3>
                        <h1 className='title-prog text-6xl lg:text-[5.0rem] font-bannerFont2 text-[#ff0054] lg:bg-gradient-to-r from-orange-600 via-[#ff0054] to-[#ff0054] bg-clip-text lg:text-transparent font-semibold '>Fitness First Festival</h1>
                        <h3 className='title-year text-3xl pl-1 font-bannerFont2 lg:font-semibold text-cyan-500'>2023-24</h3>
                    </div>

                    <button className='border border-1 px-6 py-2 text-xl mt-10 rounded-md hover:bg-[#ff0054] hover:border-[#ff0054] transition duration-300 font-bannerfont '><Link
                            activeClass="active"
                            to="timeline"
                            spy={true}
                            smooth={true}
                            offset={-100} // Adjust the offset as needed
                            duration={500} // Adjust the duration of the scroll animation
                        >
                            Xplore More

                        </Link></button>

                </div>

                <div className="hover-4 quote absolute lg:right-[4%] lg:bottom-[8%] bottom-[3%] right-[1px] text-white lg:max-w-xl max-w-xs sm:max-w-lg p-5">
                    <h3 className='quote a  text-xs leading-5 sm:leading-6  sm:text-xl md:text-2xl lg:text-xl font-bannerfont italic'>Fitness is not just about the body; it's a journey that strengthens the mind, nourishes the soul, and empowers us to embrace life's challenges with vitality.</h3>
                    <h4 className='text-lg mt-4 font-bannerfont'> - Alex Trevor</h4>
                </div>

                <div className="cards hidden lg:flex lg:absolute bottom-20 left-[4%] card-view gap-5 mt-10">
                    <Card status="Upcoming" cardImg={trekking} sportType='Trekking' cov="object-cover" pos="object-center" competition='Trek with Tree Plantation' date='26/08/2023' />
                    <Card status="Upcoming" cardImg={marathon} sportType='Walking' cov="bg-cover" pos="bg-center" competition='Walkathon' date='09/09/2023' />
                    <Card status="Upcoming" cardImg={food} sportType='Fair' cov="bg-cover" pos="bg-bottom" competition='Healthy Food Fair' date='23/09/2023' />
                </div>
            </div>
        </div>
    );
}