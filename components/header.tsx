import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
                  className='text-[#ff8a05] hover:text-[#f9b331] font-bold transition-colors duration-200'>
                  Browse Meals
                </Link>
              </li>
              <li>
                <Link
                  href='/community'
                  className='text-[#ff8a05] hover:text-[#f9b331] font-bold transition-colors duration-200'>
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
