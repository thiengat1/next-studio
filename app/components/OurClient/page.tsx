'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function OurClient() {
  return (
    <Animation>
      <div className='my-8 flex items-center w-full '>
        <div className='mr-12'>
          <h2 className='text-3xl font-bold mb-[15px]'>Our Client</h2>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <ul className='flex items-center justify-between w-full'>
          <li>
            <Image
              src='/images/Google.png'
              alt='google'
              width={150}
              height={49}
            />
          </li>
          <li>
            <Image
              src='/images/Airbnb.png'
              alt='google'
              width={150}
              height={49}
            />
          </li>
          <li>
            <Image
              src='/images/Uber.png'
              alt='google'
              width={150}
              height={49}
            />
          </li>
          <li>
            <Image
              src='/images/Amazon.png'
              alt='google'
              width={150}
              height={49}
            />
          </li>
        </ul>
      </div>
    </Animation>
  );
}

export default OurClient;
