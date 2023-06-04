import Image from 'next/image';
import React from 'react';
import EcommerceImg from '../public/assets/projects/projects 2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Head from 'next/head';

const Ecommerce1 = () => {
  return (
      <div className='w-full'>
         <Head>
            <title>E-commerce</title>
        </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/20 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src='https://raw.githubusercontent.com/blalramzy1/pic-protfoilio/main/projects%202.png?token=GHSAT0AAAAAAB7MH46RJ5WYZ2BFTBMOTCREZD45J6A'
          alt=''
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>E-commerce</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='font-sans font-bold py-4'>
            This app was built using React JS and Tailwind. 
          </p>
          <a
            href='https://github.com/blalramzy1/Ecommerce-Food'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://e-commerce-blal.surge.sh/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>    
  );
};

export default Ecommerce1;