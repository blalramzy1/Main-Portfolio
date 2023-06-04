import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactLogo from '../public/assets/contact.jpg'
import {AiFillInstagram,AiFillMail} from 'react-icons/ai'
import {FaLinkedin ,FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRouter } from 'next/router'

const Contact = () => {
    const router = useRouter();

  return (
    <div id='contact' className='w-full h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <div className='px-4'>
            <p className='py-4 uppercase font-bold tracking-widest text-[25px] text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            </div>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-3'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactLogo} alt='' />
                        </div>
                        <div>
                            <p className='py-4 text-[30px] font-bold font-sans'>Blal Ramzy</p>
                            <p className='py-2 font-sans text-[20px]'>ReactJS Developer</p>
                            <p className='py-2 font-sans text-[17px]'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
                        </div>
                        <div>
                    <p className='px-8 py-4 font-sans font-[17px]'>Connect With Me</p>
                    <div className='flex px-8 items-center justify-between'>
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
                {/* right */}
                 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action="https://getform.io/f/070faf47-9664-4ffd-b843-b1248320a0c3" method="POST">
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 px-2 font-sans'>Name</label>
                            <input name='name' className=' border-2 rounded-lg p-3 flex border-gray-400 font-sans font-semibold' type="text" />
                            </div>
                            <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 px-2 font-sans'>Phone NO.</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-400 font-sans font-semibold' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-4 px-2 font-sans'>Email</label>
                            <input  name="email" className='border-2 rounded-lg p-3 flex border-gray-400 font-sans font-semibold' type="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-4 px-2 font-sans'>Subject</label>
                            <input  name="_gotcha" className='border-2 rounded-lg p-3 flex border-gray-400 font-sans font-semibold' type="text" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-4 px-2 font-sans'>Message</label>
                            <textarea name="message" className='border-2 rounded-lg p-3 border-gray-400 font-sans font-semibold' rows='10'></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 bg-[#5651e5] mt-4' type="submit">Send Message</button>
                        </form>
                    </div>
                    </div>
            </div>
            <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30}/>
                </div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact