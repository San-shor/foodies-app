'use client';

import React, { useState, useEffect } from 'react';
import burger from '@/assets/burger.jpg';
import curry from '@/assets/curry.jpg';
import dumplings from '@/assets/dumplings.jpg';
import schnitzel from '@/assets/schnitzel.jpg';
import Image from 'next/image';

const images = [
  { image: burger, alt: 'burger' },
  { image: curry, alt: 'salad' },
  { image: dumplings, alt: 'pizza' },
  { image: schnitzel, alt: 'pasta' },
];
const Images = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='relative w-full h-full   shadow-[0 0 0.5rem rgba(0, 0, 0, 0.5)]'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out
            ${index === currentImageIndex ? 'opacity-100 ' : 'opacity-0 '}`}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Images;
