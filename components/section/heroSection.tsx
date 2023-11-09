import Image from 'next/image';
import React from 'react';
import { Button } from '../buttons/button';

interface IProps {
  title: string;
  description: string;
  cta?: string;
}

export const HeroSection = (props: IProps) => {
  const { title, description, cta } = props;
  return (
    <div className="mb-5 relative overflow-hidden bg-gray-900 px-6 py-6 rounded-md sm:rounded-xl sm:px-10 sm:py-12 md:px-12">
      <Image
        fill
        src="/placeholder/cooking-hero.jpg"
        alt="Cooking Hero"
        className='h-full w-full object-cover object-top"'
      />
      <div className="absolute inset-0 bg-gray-500/80 mix-blend-multiply"></div>

      <div className="relative mx-auto max-w-2xl lg:mx-0">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
        </div>
        {cta && (
          <div className="py-2">
            <Button>{cta}</Button>
          </div>
        )}
      </div>
    </div>
  );
};
