import Link from 'next/link'
import React from 'react'
import {AiFillInstagram,AiFillMail} from 'react-icons/ai'
import {FaLinkedin ,FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'
import { useRouter } from 'next/router';


const Main = () => {
    
const router = useRouter();

  return (
    <div className='w- h-screen text-center pt-12'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
            <div>
                <p className='uppercase font-sans text-sm tracking-widest text-gray-600'> LET&#39;S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 font-sans text-gray-700'>Hi, I&#39;m <span className='text-[#5651e5]'>Blal
                </span>
                </h1>
                <h1 className='py-4 font-sans text-gray-700'>
                    A ReactJS Web Developer
                </h1>
                <p className='sm:max-w-[70%] py-4 m-auto px-4'>I&#39;m a Frontend Web Developer, I mastered React Js, HTML, CSS, JavaScript, TailwindCss. I can convert your design into pixel perfect frontend website. I provide well structured. And learning back-end technologies.</p>
                <div className='flex items-center gap-x-1 justify-between max-w-[400px] m-auto py-4'>
                
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a target="_blank" onClick={() => router.push("https://www.linkedin.com/in/blal-ramzy-996883250/")}>
                        <FaLinkedin className="text-[25px]" />
                        </a>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a target="_blank" onClick={() => router.push("https://github.com/blalramzy1")}>
                        <FaGithub className='text-[25px]'/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a target="_blank" onClick={() => router.push("https://www.upwork.com/freelancers/~01414df6ebf3e7ecdf")}>
                        <SiUpwork className='text-[25px]'/>
                        </a>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a target="_blank" onClick={() => router.push("https://www.instagram.com/blal_ramzy1/")}>
                        <AiFillInstagram className='text-[25px]'/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main