import React from 'react';
import Link from 'next/link';
import { MealItems } from '@/type/meal';
import MealItem from '@/components/MealItem';
import { getMeals } from '@/lib/meals';

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className='w-[90%] max-w-5xl mx-auto text-center mt-10 space-y-4'>
        <h1 className='text-4xl font-bold text-gray-800'>
          Delicious meals, created{' '}
          <span className='text-[#ff9b05]'>by you</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Choose your favorite recipe and cook it yourself. It's easy and fun!
        </p>
        <p>
          <Link
            href='/meals/share'
            className='inline-block mt-2 px-4 py-2 bg-[#ff9b05] text-white font-semibold rounded hover:bg-[#f9870e] transition'>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>

      <main className='w-[90%] max-w-7xl mx-auto my-12'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {meals.map((meal) => (
            <li key={meal.id}>
              <MealItem meals={meal} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default MealsPage;
