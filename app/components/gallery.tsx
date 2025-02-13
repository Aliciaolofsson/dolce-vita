import Image from 'next/image';
import SocialMedia from './social-media';

const imgUrl = [
  {
    src: '/images/coffee-and-cake.png',
    alt: 'capuccino and a brownie',
  },
  {
    src: '/images/carrot-cake.png',
    alt: 'carrot cake muffin',
  },
  {
    src: '/images/espresso.png',
    alt: 'Espresso being poured into a cup',
  },
];
export default function Gallery() {
  return (
    <div>
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-3 pt-10'>
        {imgUrl.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={500}
            height={600}
            className='h-full w-full'
          />
        ))}
      </div>
      <div className='flex flex-col my-6'>
        <h1 className='text-lg w-2/3 md:text-2xl sm:text-xl sm:w-72 md:w-1/3'>
          Follow us on social media for updates and more delicious creations.
        </h1>
        <div className='flex w-fit items-center justify-center gap-4'>
          <SocialMedia className='size-12' />
          <div className='relative z-0 bottom-6 left-2 sm:max-md:bottom-4 '>
            <svg
              width='149'
              height='80'
              viewBox='0 0 148 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M146.115 1.8389C148.809 78.6762 58.2959 104.499 53.6238 66.8219C51.796 52.0817 79.8252 45.8822 86.6093 65.0174C98.2807 97.9382 50.85 115.82 2.09473 72.5619M2.09473 72.5619L15.3232 69.3382M2.09473 72.5619L5.82508 90.1599'
                stroke='#2F4F4F'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
