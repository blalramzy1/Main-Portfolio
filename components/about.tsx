import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';


const about = () => {
  return (
    <div id='about' className='w-full md:h-screen flex p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 pt-4'>
                <h3 className='py-4 uppercase font-bold tracking-widest text-[25px] text-[#5651e5]'>About</h3>
                <h2 className='py-3'>Who I Am</h2>
                <p className='py-2 text-gray-600'> */ I am your ReactJS, NextJS developer</p>
                <p className=' text-4xl font-bold text-gray-700'>Hello Everyone, I am Blal, I am React Js developer with 1 years of experience.</p>
                <p className='py-3'>I have expertise in React Js, React Redux, Hooks, Context Api, Reactstrap, Html, CSS, TailwindCss,<b/>I can develop any kind of front end using React Js according to your business requirements,  I specialize in building mobile responsive front-end UI applications, I am most proficient
                in building front-end applications using HTML, CSS, Javascript, 
                React and Next.js, I am a quick learner and can pick up new tech stacks as
                needed.</p>
                <Link href='/#projects' className='py-4 text-gray-600 no-underline hover:underline cursor-pointer'>/* Check out some of my latest projects */</Link>
            </div>
            <div className='py-2'>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center md:py-6 p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImg} alt="/" className='rounded-xl' />
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default about