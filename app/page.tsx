import Images from '@/components/Images';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex gap-12 my-12 mx-auto w-[90%]'>
        <div className='w-xl h-96'>
          <Images />
        </div>
        <div className='flex flex-col justify-center items-center gap-6 text-2xl'>
          <div>
            <h1 className='text-3xl font-bold tracking-widest uppercase '>
              Time to get cooking
            </h1>
            <p className='text-gray-600 mt-2'>
              Taste & share food from all over the world
            </p>
          </div>
          <div className='flex gap-4 mt-4'>
            <Link href='/meals' className='link'>
              Explore Meals
            </Link>
            <Link href='/community' className='link'>
              Join Community
            </Link>
          </div>
        </div>
      </header>
      <main className='py-12 bg-gradient-to-b from-white via-gray-50 to-white'>
        <section className='max-w-4xl w-[90%] mx-auto my-12 text-center'>
          <div className='bg-white shadow-xl rounded-2xl p-8 space-y-6 transition duration-500 hover:shadow-2xl'>
            <h2 className='text-3xl font-bold text-[#ff9b05]'>How it works</h2>
            <p className='text-lg text-gray-600'>
              Foodies is a community-driven platform that allows you to find and
              share recipes, cooking tips, and cooking videos.
            </p>
            <p className='text-lg text-gray-600'>
              It's easy to get started. Just create an account and start
              browsing recipes.
            </p>
          </div>
        </section>

        <section className='max-w-4xl w-[90%] mx-auto my-12 text-center'>
          <div className='bg-white shadow-xl rounded-2xl p-8 space-y-6 transition duration-500 hover:shadow-2xl'>
            <h2 className='text-3xl font-bold text-[#ff9b05]'>Why Foodies?</h2>
            <p className='text-lg text-gray-600'>
              Foodies is a community-driven platform that allows you to find and
              share recipes, cooking tips, and cooking videos.
            </p>
            <p className='text-lg text-gray-600'>
              It's easy to get started. Just create an account and start
              browsing recipes.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
