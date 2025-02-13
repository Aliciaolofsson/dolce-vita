'use client';
import { MenuIcon } from 'lucide-react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useState } from 'react';
import SocialMedia from './social-media';

const navbarItems = [
  {
    title: 'About',
    href: '#ourStory',
  },
  {
    title: 'Menu',
    href: '#menu',
  },
  {
    title: 'Find Us',
    href: '#find-us',
  },
];

const socialMediaLinks = [
  {
    href: 'https://www.instagram.com/aliciaolofssoon',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
        ></path>
      </svg>
    ),
  },

  {
    href: 'https://linkedin.com/in/alicia-olofsson-b23b25242',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95'
        ></path>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  return (
    <nav className='fixed z-50 bg-white xl:static text-primary flex justify-between uppercase items-center md:px-10 xl:px-32 px-8 py-6 text-lg w-full'>
      <a href='/' className='tracking-[0.2rem] text-2xl md:text-2xl'>
        Dolce Vita
      </a>
      <div className='hidden md:block'>
        <ul className='flex md:gap-10'>
          {navbarItems.map((item, index) => (
            <li key={index} className='cursor-pointer'>
              <a className='relative top-2' href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
          <SocialMedia />
        </ul>
      </div>
      <DropdownMenu>
        <div className='flex justify-between md:hidden'>
          <DropdownMenuTrigger asChild className='justify-self-end'>
            <MenuIcon className='md:hidden' width={30} height={30} />
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent className='inset-0 w-screen h-screen relative top-6 bg-primary gap-7 border-none shadow-none flex flex-col items-center justify-center z-50'>
          {navbarItems.map((link) => (
            <DropdownMenuItem key={link.href}>
              <a
                className='text-3xl text-secondary relative flex items-center bottom-6'
                href={link.href}
              >
                <span className=''>{link.title}</span>
              </a>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
