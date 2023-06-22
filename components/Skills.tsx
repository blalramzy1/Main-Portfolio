import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import JS from '../public/assets/skills/javascript.png'
import ReactJS from '../public/assets/skills/react.png'
import NextJS from '../public/assets/skills/nextjs.png'
import Tailwindcss from '../public/assets/skills/tailwind.png'
import GitHub from '../public/assets/skills/github1.png'
import Nodejs from '../public/assets/skills/node.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full container lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='py-4 uppercase font-bold tracking-widest text-[25px] text-[#5651e5]'>Skills</p>
            <h2 className='py-3'>What can i Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={Html} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={Css} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={JS} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={ReactJS} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={Tailwindcss} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TailwindCss</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={NextJS} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={GitHub} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>
                        
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image className='w-[64px] h-[64px]' 
                            src={Nodejs} alt='' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Nodejs</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;