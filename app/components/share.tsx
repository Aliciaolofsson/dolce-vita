import React from 'react';

export default function ShareBtn() {
  return (
    <div className='w-fit group rounded-lg border-2 md:border-[0.2rem] border-primary'>
      <a
        href='/menu-dolce-vita.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        <div className='flex items-center py-1 px-10 gap-2'>
          <h1 className='relative capitalize text-primary top-1 text-2xl'>
            Share
          </h1>
          <svg
            width='22'
            height='18'
            viewBox='0 0 26 22'
            xmlns='http://www.w3.org/2000/svg'
            className='transition-all duration-300'
          >
            <path
              fill='transparent'
              className='group-hover:fill-red-700 transition-all duration-300'
              d='M21.4 13.2345C23.188 11.6148 25 9.6734 25 7.13296C25 5.51474 24.3046 3.9628 23.0669 2.81855C21.8292 1.67429 20.1359 0.823447 18.4 1.03154C14.8 1.46309 14.8 3.68182 13 5.34587C11.2 3.68182 11.2 1.46314 7.6 1.03146C5.86411 0.823307 4.17084 1.67429 2.9331 2.81855C1.69536 3.9628 1 5.51474 1 7.13296C1 9.6845 2.8 11.6259 4.6 13.2345L13 21L21.4 13.2345Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
