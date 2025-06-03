'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  return (
    <header>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <Link
            href='/'
            className='flex items-center space-x-3 hover:opacity-80 transition-opacity'>
            <Image
              src={'/logo.png'}
              alt='A Plate with a fork and a knife'
              width={50}
              height={50}
              className='object-contain'
            />
            <span className='text-2xl font-bold text-[#ff9b05]'>
              Foodies App
            </span>
          </Link>

          <nav className='hidden md:block'>
            <ul className='flex items-center space-x-8'>
              <li>
                <Link
                  href='/meals'
                  className={` font-bold transition-colors duration-200 ${
                    path === '/meals'
                      ? 'text-[#f9572a]'
                      : 'text-[#ff8a05] hover:text-[#f9b331]'
                  }`}>
                  Browse Meals
                </Link>
              </li>
              <li>
                <Link
                  href='/community'
                  className={` font-bold transition-colors duration-200 ${
                    path === '/community'
                      ? 'text-[#f9572a]'
                      : 'text-[#ff8a05] hover:text-[#f9b331]'
                  }`}>
                  Foodies Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
