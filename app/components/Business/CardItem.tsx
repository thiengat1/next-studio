import React from 'react';
import Image from 'next/image';
interface itemProps {
  item: {
    id: number;
    name: string;
    content: string;
    image: string;
  };
}

function CardItem({ item }: itemProps) {
  const { id, name, content, image } = item;
  return (
    <div
      className={`${
        id == 1 || id == 3 ? 'mt-8' : 'mt-0'
      } mb-[30px] mr-[30px] text-center flex flex-col justify-center items-center px-[44px] py-[39px] w-[308px] h-[379px] bg-white shadow rounded-md`}
    >
      <div className='flex justify-center items-center rounded-md p-2 bg-blue-300 w-[121px]'>
        <Image
          src={`/images/${image}.png`}
          alt='box-search'
          width={74}
          height={74}
        />
      </div>
      <h2 className=' mt-[34px] mb-[25px] text-[24px] font-bold'>{name}</h2>
      <p>{content}</p>
    </div>
  );
}

export default CardItem;
