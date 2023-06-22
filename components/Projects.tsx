import React ,{useState,useEffect}from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Project1 from '../public/assets/Hotel.jpg'
import Project2 from '../public/assets/Food-ecommerce.jpg'
import Project3 from '../public/assets/semi e-commerce.jpg'
import Project4 from '../public/assets/gym.jpg'
import Project5 from '../public/assets/landingPage.jpg'
import Project6 from '../public/assets/hulu.jpg'
import Project7 from '../public/assets/twitch.jpg'
import Projec8 from '../public/assets/pizza-delvery.jpg'


const Projects = () => {
    

  return (
    <div id='projects' className='container'>
        <div className='max-w-[1240px] mx-auto  py-16'>
            <p className='py-4 uppercase font-bold tracking-widest text-[25px] text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&#39;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9] ease-in duration-200'>
            <div className='mx-auto'>
                <Image width={600} height={300} className='rounded-xl group-hover:opacity-10' src={Project1} alt="/" />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Hotel</h3>
                <Link href='/hotel'>
                    <p  className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer px-2'>More Info</p>
                 </Link>
            </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300}  className='rounded-xl group-hover:opacity-10' src={Project2} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Ecommerce Food</h3>
                <Link href='/ecommerce1'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
        
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300}  className='rounded-xl group-hover:opacity-10' src={Project4} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2 px-2'>GYM</h3>
                <Link href='/gym'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300}  className='rounded-xl group-hover:opacity-10' src={Project5} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Landing page</h3>
                <Link href='/portfoliosite'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300}  className='rounded-xl group-hover:opacity-10' src={Project6} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Hulu 2.0</h3>
                <Link href='/Hulu'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300} className='rounded-xl group-hover:opacity-10' src={Project7} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Twitch App</h3>
                <Link href='/TwitchApp'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#b5bec9]'>
        <Image width={600} height={300} className='rounded-xl group-hover:opacity-10' src={Projec8} alt="/" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-sans tracking-widest text-center py-2'>Pizza E-commerce</h3>
                <Link href='/Pizza'>
                    <p className='text-center font-sans py-3 bg-white rounded-xl text-gray-700 hover:bg-gray-200 font-bold text-lg cursor-pointer'>More Info</p>
                 </Link>
            </div>
         </div>
            </div>
        </div>
    </div>
  )
}

export default Projects