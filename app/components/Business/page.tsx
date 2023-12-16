'use client';
import React from 'react';
import CardItem from './CardItem';
import dataItems from './data.json';
import Image from 'next/image';
import Animation from '../Animation/page';

function Business() {
  return (
    <Animation>
      <div className='mt-8  flex relative w-full items-center'>
        <div className='w-[396px] absolute'>
          <div className='text-[40px]'>How can we help your Business ?</div>
          <div className='w-[178px] h-[178px] bg-yellow-200 rounded-tl-[100px] absolute top-[-20px] left-[-40px] -z-10'></div>
          <p className='mt-[27px]'>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <Image
            className='bottom-[-100px] -z-20 mt-[104px]'
            src='/images/dot.png'
            alt='about'
            width={404}
            height={154}
          />
        </div>
        <div className='relative  ml-[273px] w-full'>
          <div className='grid grid-cols-2 relative px-[100px] 2xl:px-[214px]  w-full'>
            {dataItems.map((item) => {
              return <CardItem item={item} key={item.id} />;
            })}
          </div>

          <div className=' bg-blue-300 opacity-40 w-full h-[619px] rounded-tl-[100px] absolute -z-10 top-[108px]'></div>
        </div>
      </div>
    </Animation>
  );
}

export default Business;
