import Link from 'next/link'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import Logo from '../public/assets/logo.webp'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedin ,FaGithub} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'

const NavBar = () => {
    const [Nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () =>{
        setNav(!Nav)
    }
    useEffect(()=>{
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow)
    },[])
  return (
    <div className={shadow ? 'fixed w-full h-[100px] shadow-xl z-[100] duration-200' : 'fixed w-full h-[100px] duration-200 z-[100]'}>
        <div className='flex bg-[#ecf0f3] justify-between items-center w-full h-full px-2 xl:px-16'>
            <div className='sm:pl-4 pl-10'>
                <Link href='/'>
                    <Image className='w-[200px] pt-1 px-6 cursor-pointer' src={Logo} alt=''/>
                </Link>
            </div>
            <div>
            <ul className='hidden font-sans md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
               </div>
            </div>
        </div>

        <div className={Nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={Nav 
            ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10  duration-500' 
            : 'fixed left-[100%] top-0 p-10 duration-500'}>
                <div>
                    <div className='flex w-full justify-between items-center'>
                    <Image className='w-[200px] pt-1 px-6 cursor-pointer' src={Logo} alt='/'/>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'> LET&#39;S build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase font-sans font-semibold'>
                        <Link href='/'>
                        <li className='text-sm py-4'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li className='text-sm py-4'>About</li>
                        </Link>
                        <Link href='/#skills'>
                        <li className='text-sm py-4'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                        <li className='text-sm py-4'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                        <li className='text-sm py-4'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-[120px]'>
                        <p className='uppercase tracking-widest font-semibold text-[#5651e5]'> LET&#39;S connect</p>
                        <div className='flex items-center justify-between  text-[25px] my-4 w-full sm:w-[80%]'>
                            <div className="rounded-full shadow-2xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedin />
                             </div>
                            <div className='rounded-full shadow-2xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-2xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-2xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <SiFiverr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar