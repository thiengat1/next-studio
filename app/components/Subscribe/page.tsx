'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function Subscribe() {
  return (
    <Animation>
      <div className='relative bg-blue-200 rounded-lg px-16 py-32 mt-12 flex justify-between gap-4 items-center'>
        <div>
          <h2 className='text-3xl mb-[15px]'>Subscribe Newsletter</h2>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className='relative flex justify-center items-center'>
          <Image
            className=' absolute -z-9 left-8'
            src='/images/Rectangle.png'
            alt='avatar'
            width={543}
            height={200}
          />
          <div className='z-10 p-4 h-[60px] flex gap-4  rounded-lg items-center bg-white'>
            <input className='rounded-lg h-[44px]'></input>
            <button className='lewis-btn bg-blue-700'>Contact now</button>
          </div>
        </div>
        <div className='w-[178px] h-[178px] bg-yellow-200 absolute bottom-[-60px] -z-10 left-[-60px] rounded-bl-[80px]'></div>
      </div>
    </Animation>
  );
}

export default Subscribe;
