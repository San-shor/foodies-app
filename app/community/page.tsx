import React from 'react';
import mealIcon from '@/assets/icon/meal.png';
import communityIcon from '@/assets/icon/community.png';
import eventsIcon from '@/assets/icon/events.png';
import Image from 'next/image';

const CommunityPage = () => {
  return (
    <div className='flex flex-col items-center py-16 px-4 bg-white text-gray-800'>
      {/* Header */}
      <header className='text-center max-w-2xl mb-12'>
        <h1 className='text-4xl font-bold mb-4'>
          One shared passion:{' '}
          <span className='bg-gradient-to-r from-[#f9572a] to-[#ff9b05] bg-clip-text text-transparent'>
            Food
          </span>
        </h1>
        <p className='text-lg text-gray-600'>
          Join our community and share your favorite recipes!
        </p>
      </header>

      {/* Main */}
      <main className='w-full max-w-6xl'>
        <h2 className='text-3xl font-semibold text-center mb-10'>
          Community Perks
        </h2>

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
          <li className='flex flex-col items-center bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition'>
            <Image
              src={mealIcon}
              alt='A delicious meal'
              width={200}
              height={200}
              className='mb-4'
            />
            <p className='text-center text-lg font-semibold'>
              Share & discover recipes
            </p>
          </li>

          <li className='flex flex-col items-center bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition'>
            <Image
              src={communityIcon}
              alt='A crowd of people, cooking'
              width={200}
              height={200}
              className='mb-4'
            />
            <p className='text-center text-lg font-semibold'>
              Find new friends & like-minded people
            </p>
          </li>

          <li className='flex flex-col items-center bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition'>
            <Image
              src={eventsIcon}
              alt='A crowd of people at a cooking event'
              width={200}
              height={200}
              className='mb-4'
            />
            <p className='text-center text-lg font-semibold'>
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default CommunityPage;
