import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';



function Timeline() {

    const  [Timelines,setTimelines]=useState([]);
    //Function of api called ;
    const Get_API_Called=()=>{ 
       axios.get("http://localhost:80/first/Timeline.php")
       .then((res)=>{setTimelines(res.data);
            
   Timelines.slice().sort((a, b) => {
    if (a.isLive==='1' && b.isLive==='0') return -1;
    if (a.isLive==='0' && b.isLive==='1') return 1;
    if (a.isDone==='0' && b.isDone==='1') return -1;
    if (a.isDone==='1' && b.isDone==='0') return 1;
    return 0;
});})

   }

    //when page loaded then function get excute 
    useEffect(() => {
       // Fetch data from the API when the page loads
       Get_API_Called();
     }, []);

    return (
        <div id="timeline" className='h-full w-full flex flex-col  lg:flex-row font-bannerfont bg-gradient-to-bl from-pink-700 via-black to-black'>
            <div className='p-4 flex flex-col gap-8 lg:w-[55%]'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col gap-4 pt-8 pl-8 justify-center'>
                    <h1 className='text-3xl 2xl:text-5xl font-semibold text-white'>
                        Timeline
                    </h1>
                    <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[10%]"></div>
                </div>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="cursor overflow-auto left w-full h-[80vh] lg:w-full p-4 lg:pl-16 md:pt-8 flex flex-col gap-[3.5rem] ">
                    <ol className="relative border-l-2 border-pink-600">
                        {Timelines.map((event, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5"></div>
                                <div className="head flex items-center gap-4 ">
                                    <time className="text-lg md:text-3xl lg:text-xl 2xl:text-lg font-normal leading-none text-gray-300">{event.date}</time>
                                    {event.isDone==='1' ? <h1 className='done-glow bg-black text-white  border-2 border-green-600 px-1 md:text-lg text-sm lg:text-sm'>DONE</h1> : (event.isLive=='1' ? <h1 className='live-glow bg-black text-white  border-2 border-red-600 px-1 text-sm md:text-lg lg:text-sm'>🔴 LIVE</h1> : <h1 className='text-white md:text-lg text-sm lg:text-sm'> -- Upcoming</h1>)}
                                </div>
                                <h3 className="text-2xl md:text-4xl lg:text-2xl 2xl:text-2xl font-medium text-pink-600 ">{event.Title}</h3>
                                <p className="text-lg md:text-xl  lg:text-base 2xl:text-lg font-normal text-white ">{event.Description}</p>

                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="right w-full overflow-hidden lg:w-[45%] py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16 lg:bg-gradient-to-bl bg-gradient-to-t from-pink-700 via-black to-black">
                <div className="flex flex-col justify-center">
                    <h1 data-aos="fade-left" data-aos-offset="200" data-aos-duration="1300" className="mb-4 text-4xl font-medium font-bannerfont tracking-tight leading-none text-orange-600 md:text-5xl 2xl:text-6xl ">Our Trailer is OUT!</h1>
                    <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="mb-8 text-lg  text-white 2xl:text-xl font-medium ">📽️ Watch the exhilarating trailer on YouTube and get ready to be motivated and energized. Don't miss out on this incredible fitness journey!
                        👍 Like, 💬 Comment, and 🔄 Share the video to spread the fitness spirit. 🔥</p>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                            Get started
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-pink-600 hover:bg-gray-100 hover:text-gray-900 hover:border-white focus:ring-4 focus:ring-gray-100    ">
                            Learn more
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300">
                    <iframe className="mx-auto w-full lg:max-w-6xl h-64 sm:h-96 lg:h-64 2xl:h-96 rounded-lg shadow-3xl" src="https://www.youtube.com/embed/FKXRu9yoPh4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>

    );
}

export default Timeline;
