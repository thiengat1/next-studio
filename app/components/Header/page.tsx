import React from 'react';
import Image from 'next/image';

function Header() {
  const menus = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'What We Do' },
    { id: 3, name: 'Service' },
    { id: 4, name: 'Project' },
    { id: 5, name: 'Blog' },
    { id: 6, name: 'Contact' },
  ];
  return (
    <div className='flex items-center justify-between w-full'>
      <Image
        className=' cursor-pointer hover:opacity-70'
        src='/images/logo.png'
        alt='logo'
        width={120}
        height={34}
      />
      <ul className='flex'>
        {menus.map((menu) => {
          return (
            <li
              key={menu.id}
              className='mr-8 relative font-bold hover:text-gray-400 cursor-pointer after:w-0 after:h-0.5 after:bg-gray-300 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 '
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
