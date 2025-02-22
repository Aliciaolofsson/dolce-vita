import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex flex-col items-center gap-4 pt-8 md:pt-8 pb-10 md:pb-10 text-primary'>
      <Link href='/' className='mb-2'>
        <Image
          src='/images/logo.svg'
          width={150}
          height={180}
          alt='Dolce Vita logo'
          className='px-5 md:px-0'
        />
      </Link>
      <div className='flex items-center gap-2 md:gap-4'>
        <p className='relative top-1 md:text-xl whitespace-nowrap'>
          © Dolce Vita 2025
        </p>
        <div className='h-4 w-[1.5px] bg-primary relative top-[4px] md:top-[1px]' />
        <a
          href='https://www.aliciaolofsson.com/tjänster'
          className='relative top-1 md:text-xl whitespace-nowrap'
        >
          <p>
            Website by <span>Alicia Olofsson</span>
          </p>
        </a>
      </div>
    </div>
  );
}
