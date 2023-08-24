import React from 'react'

export default function Card(props) {
    return (
    <div class="max-w-sm bg-white shadow flex flex-col">
    <div className='h-[55%] w-[100%] bg-black bg-cover bg-center' style={{ backgroundImage: `url(${props.cardImg})` }}>

    </div>
    <div class="pl-5 pr-1 h-[45%] w-full flex flex-col justify-center items-start bg-slate-900">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-pink-600">{props.sportType}</h5>
        </a>
        <p class="mb-3 font-medium text-white">{props.func}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700  hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Register
        </a>
    </div>
</div>
        
    )
}
