import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MealItems } from '@/type/meal';

const MealItem = ({ meals }: { meals: MealItems }) => {
  return (
    <article className='flex flex-col max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-[#fcd9b8] to-[#ffeacc] text-gray-800 transition-transform duration-300 hover:scale-[1.02]'>
      <div className='relative w-full h-44'>
        <Image
          src={meals.image}
          alt={meals.title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>

      <div className='p-4 flex flex-col gap-2'>
        <header>
          <h2 className='text-lg font-semibold '>{meals.title}</h2>
          <p className='text-xs text-gray-600'>by {meals.creator}</p>
        </header>

        <p className='text-gray-700 text-sm mt-2 line-clamp-3'>
          {meals.summary}
        </p>

        <div className='mt-3'>
          <Link
            href={`/meals/${meals.slug}`}
            className='inline-block px-4 py-2 rounded-full bg-[#ff9b05] text-white font-semibold hover:bg-[#f9870e] transition'>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
