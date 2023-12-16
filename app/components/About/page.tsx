'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function About() {
  return (
    <Animation>
      <div className='mt-5 flex items-center justify-evenly'>
        <div className='mr-[95px] relative basis-1/3'>
          <h2 className=' text-3xl font-bold mb-[38px]'>
            A Digital Product Agency
          </h2>
          <p className='mb-8'>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className='lewis-btn bg-blue-500'>Contact Now</button>
          <Image
            className='absolute bottom-[-100px] -z-10'
            src='/images/dot.png'
            alt='about'
            width={404}
            height={154}
          />
        </div>
        <div className='relative basis-2/3 w-full h-full'>
          <div className='-z-10 absolute w-[129px] h-[129px] bg-blue-400 top-0 left-[-65px] rounded-full opacity-30 '></div>
          <Image
            src='/images/about.png'
            alt='about'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full'
          />
        </div>
      </div>
    </Animation>
  );
}

export default About;
