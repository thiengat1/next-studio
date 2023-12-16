'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function Products() {
  return (
    <Animation>
      <div className='flex items-center justify-between'>
        <div className='w-[50%]'>
          <Image
            className='bottom-[-100px] -z-20 mt-[104px]'
            src='/images/product.png'
            alt='about'
            width={550}
            height={372}
          />
        </div>

        <div className='w-[50%] relative pl-8'>
          <h2 className='text-5xl mb-[26px]'>
            Great Digital Product Agency since 2016{' '}
          </h2>
          <p>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
          <div className='w-[178px] h-[178px] bg-blue-200 rounded-br-[100px] absolute top-0 left-0 -z-20 opacity-60'></div>
        </div>
      </div>
    </Animation>
  );
}

export default Products;
