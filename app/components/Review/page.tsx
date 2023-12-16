'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function Review() {
  return (
    <Animation>
      <div className='flex justify-center mt-8 flex-col'>
        <div className='text-center'>
          <h2 className='text-5xl mb-[15px]'>What our happy client say</h2>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className='flex items-center justify-between mt-8 gap-2'>
          <Image
            className='basis-1/3'
            src='/images/avatar.png'
            alt='avatar'
            width={389}
            height={389}
          />
          <div className='basis-1/3'>
            <h2 className='text-2xl mb-[20px]'>Matthew Paul</h2>
            <p>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <ul className='mt-6 flex gap-4'>
              <li className='w-[12px] h-[12px] bg-blue-600 rounded-full'></li>
              <li className='w-[12px] h-[12px] bg-blue-100 rounded-full'></li>
              <li className='w-[12px] h-[12px] bg-blue-100 rounded-full'></li>
              <li className='w-[12px] h-[12px] bg-blue-100 rounded-full'></li>
            </ul>
          </div>
          <Image
            className='basis-1/3'
            src='/images/Group.png'
            alt='avatar'
            width={348}
            height={355}
          />
        </div>
      </div>
    </Animation>
  );
}

export default Review;
