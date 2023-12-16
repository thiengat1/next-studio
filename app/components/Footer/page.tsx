'use client';
import React from 'react';
import Image from 'next/image';
import Animation from '../Animation/page';

function Footer() {
  return (
    <Animation>
      <div className='mt-[100px] flex justify-between'>
        <div className='basis-1/5'>
          <h6 className='text-2xl mb-8'>A+ Studio</h6>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <ul className=' flex gap-2 mt-4'>
            <li className=' cursor-pointer'>
              <Image
                src='/images/facebook.png'
                alt='about'
                width={36}
                height={36}
              />
            </li>
            <li className=' cursor-pointer'>
              <Image
                src='/images/twitter.png'
                alt='about'
                width={36}
                height={36}
              />
            </li>
            <li className=' cursor-pointer'>
              <Image
                src='/images/linkedin.png'
                alt='about'
                width={36}
                height={36}
              />
            </li>
          </ul>
        </div>
        <ul className='gap-2'>
          <li className='text-2xl mb-8'>What We Do</li>
          <li>Web Design </li>
          <li>App Design</li>
          <li>Social Media Manage</li>
          <li>Market Analysis Project</li>
        </ul>
        <ul className='gap-2'>
          <li className='text-2xl mb-8'>Company</li>
          <li>About Us </li>
          <li>Career</li>
          <li>Become Investor</li>
        </ul>
        <ul className='gap-2'>
          <li className='text-2xl mb-8'>Support</li>
          <li>FAQ</li>
          <li>Policy</li>
          <li>Business</li>
        </ul>
        <ul className='gap-2'>
          <li className='text-2xl mb-8'>Contact</li>
          <li>WhatsApp </li>
          <li>Support 24/7</li>
        </ul>
      </div>
    </Animation>
  );
}

export default Footer;
