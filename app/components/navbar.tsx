'use client';
import { MenuIcon } from 'lucide-react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import SocialMedia from './social-media';
import Link from 'next/link';
import Image from 'next/image';

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
  {
    title: (
      <Image
        src='/images/logo.svg'
        width={200}
        height={200}
        alt='Dolce Vita logo'
        className='px-5 md:px-0 md:hidden'
      />
    ),
    href: '#top',
  },
];

export default function Navbar() {
  return (
    <nav className='fixed z-50 bg-white md:static text-primary flex justify-between uppercase items-center md:px-10 xl:px-32 px-8 py-10 text-lg w-full'>
      <Link href='/' className='tracking-[0.2rem] text-2xl md:text-2xl'>
        Dolce Vita
      </Link>
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
        <DropdownMenuContent className='inset-0 w-dvw h-screen relative top-2 bg-white gap-7 border-none shadow-none flex flex-col items-center justify-center z-50'>
          {navbarItems.map((link) => (
            <DropdownMenuItem key={link.href}>
              <a
                className='text-2xl text-primary relative flex items-center bottom-6'
                href={link.href}
              >
                <p>{link.title}</p>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
