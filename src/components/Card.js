import React from 'react'

export default function Card(props) {
    return (
        <div className='shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 overflow-hidden card lg:h-[13rem] lg:w-[10rem] 2xl:h-[24rem] 2xl:w-[17rem] relative '>
            <div className="z-10 overflow-hidden badge absolute 2xl:text-sm lg:text-xs bg-orange-600 px-2 py-1 rounded-xl top-2 left-2 text-white first-line:font-bannerfont font-semibold">{props.status}</div>
            <img className={`card-top h-[48%] hover:scale-[1.1] transition duration-500 w-full ${props.cov} ${props.pos}`} src={props.cardImg} alt="" />
            <div className='overflow-hidden card-bottom h-[52%] w-full bg-black '>
                <div className="card-details 2xl:pl-6 2xl:pt-6 2xl:pr-2 lg:pl-2 lg:pt-1">
                    <div className='flex gap-2'>
                        <h3 className='2xl:text-lg lg:text-sm text-white font-bannerfont '>{props.sportType}</h3>
                        <p> - {props.date}</p>
                    </div>
                    <h1 className='2xl:text-2xl lg:text-base text-pink-600 font-bannerfont font-bold 2xl:h-16 lg:h-6'>{props.competition}</h1>
                    <button className='border border-1 border-purple-700 2xl:py-1 2xl:px-2 2xl:mt-2 2xl:text-base lg:mt-6 lg:px-1 lg:py-[2px] lg:text-sm hover:bg-pink-600 text-white hover:border-pink-600 bg-purple-700 transition duration-300'>Register</button>
                </div>
            </div>
        </div>
    )
}
