'use client';
import Image from 'next/image';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import CurlyArrow from './components/arrow';
import CoffeeBtn from './components/coffeeBtn';
import Gallery from './components/gallery';
import ShareBtn from './components/share';

export default function Home() {
  const contacts = [
    {
      icon: <MapPinIcon className='size-6 md:size-7' />,
      text: 'Johannes Magnus väg 26, 583 28 Linköping',
    },
    {
      icon: <MailIcon className='size-6 md:size-7' />,
      text: 'dolcevita.lkpg@gmail.com',
    },
    {
      icon: <PhoneIcon className='size-6 md:size-7' />,
      text: '070-910 07 28',
    },
  ];

  const openingHours = [
    { day: 'Monday', hours: '10-17' },
    { day: 'Saturday', hours: '10-16' },
    { day: 'Tue-Fri', hours: '10-18' },
    { day: 'Sunday', hours: '11-17' },
  ];

  return (
    <div className='flex flex-col px-8 pt-20 shadow-md xl:shadow-none gap-2 xl:pt-0 md:px-10 xl:px-32 md:gap-16 text-primary'>
      <div
        id='top'
        className='flex flex-col md:flex-row gap-10 xl:gap-20 pt-4 justify-between'
      >
        <section className='flex flex-col text-primary gap-6 justify-end'>
          <Image
            src={'/images/duck.svg'}
            width={60}
            height={50}
            alt={'duck vector'}
            className='w-16 xl:size-20'
          />

          <h1 className='text-3xl'>Welcome to Dolce Vita</h1>
          <h2 className='text-6xl text-primary uppercase lg:text-[5.5rem] md:leading-[4rem] lg:leading-[6rem] font-bold space-y-4 whitespace-nowrap'>
            <span>Possibly</span> <span className='block'>the Best</span>
            <span className='block'>Fika in Town</span>
          </h2>
          <CurlyArrow className='absolute md:left-[18rem] lg:left-[23rem] xl:left-[28rem] lg:top-[30rem]  xl:top-[35.5rem] hidden md:block ' />
          <CoffeeBtn />
        </section>
        <Image
          src={'/images/dolce-vita-hero.png'}
          className='rounded-3xl sm:w-full md:w-1/2 xl:h-full'
          alt={'entrance to Dolce Vita'}
          width={500}
          height={600}
        />
      </div>
      <div
        className='flex flex-col lg:flex-row items-center rounded-2xl gap-16 md:gap-16 md:py-10 py-20'
        id='ourStory'
      >
        <section className='flex flex-col gap-12 md:mt-10 text-lg md:text-xl'>
          <div className='space-y-4'>
            <h3 className='text-4xl md:text-5xl font-bold underline underline-offset-8 uppercase'>
              Our Story
            </h3>
            <p>
              Founded by a South African chef with years of experience in
              Michelin-starred restaurants in the UK and Sweden, Dolce Vita is a
              passion project built on craftsmanship and a love for high-quality
              ingredients.
            </p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-4xl md:text-4xl uppercase'>
              Handcrafted with Passion
            </h3>
            <div className='space-y-4'>
              <p>
                At Dolce Vita, we craft everything with love and care—from
                delicate pastries to small-batch, handmade gelato. Using only
                the highest quality ingredients, we bring global flavors to the
                heart of Linköping.
              </p>
              <p>
                Enjoy a bite to eat, a fika that&apos;s fresh and modern,
                whether it&apos;s a rich espresso, a perfectly balanced cake, or
                a creamy gelato.
              </p>
              <h1 className='text-2xl'>Come in, take a seat, and enjoy!</h1>
            </div>
          </div>
        </section>
        <Image
          src='/images/bird-globe.svg'
          width={400}
          height={500}
          alt='Duck flying from South Africa to Sweden'
          className='rounded-xl md:rounded-3xl px-4 sm:size-2/3'
        />
      </div>
      <div>
        <Image
          src='/images/coffee-machine.png'
          alt='Coffee Machine'
          width={1200}
          height={500}
          className='rounded-2xl'
        />
      </div>
      <div id='menu' className='flex flex-col items-center gap-4 rounded-2xl'>
        <div className='flex flex-col items-center gap-2 px-4 py-4'>
          <h4 className='text-4xl md:text-5xl uppercase underline underline-offset-8 mb-2'>
            Menu
          </h4>
          <h5 className='text-lg md:text-2xl md:w-2/3 text-center'>
            We serve speciality coffee, handcrafted cakes and pastries,
            breakfast, lunch and homemade gelato.
          </h5>
          <p>(We also offer take-away.)</p>
        </div>
        <div className='w-full border-primary border-2 rounded-2xl p-4'>
          <Image
            src='/images/menu.png'
            alt='Menu Preview'
            width={1200}
            height={800}
            className='rounded-3xl'
          />
        </div>
        <div className='py-2 md:py-6 flex items-center flex-col gap-4'>
          <h1 className='text-lg md:text-2xl'>
            Planning a visit? Send the menu to a friend!
          </h1>
          <ShareBtn />
        </div>
      </div>
      <section>
        <Gallery />
      </section>

      {/* Find Us Section */}
      <div className='py-12 lg:py-20 rounded-3xl flex flex-col md:flex-row gap-12 sm:gap-8 md:gap-8'>
        <div className='space-y-10 max-w-lg flex flex-col'>
          <section id='find-us' className='flex flex-col gap-4'>
            <h1 className='text-4xl md:text-5xl uppercase underline underline-offset-8 lg:text-left'>
              Find us
            </h1>
            <p className='text-lg md:text-xl pr-6 xl:pr-10'>
              We are located in Vallastaden, 15 min away from the city centre.
              Come visit us.
            </p>
            <ul className='space-y-4'>
              {contacts.map((contact, index) => (
                <li
                  key={index}
                  className='flex gap-4 text-lg md:text-xl items-center'
                >
                  {contact.icon}
                  <p className='w-2/3 lg:w-full'>{contact.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className='space-y-6 md:w-fit uppercase'>
            <h2 className='text-4xl whitespace-nowrap underline underline-offset-8'>
              Opening Hours
            </h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-2xl'>
              {openingHours.map((item, index) => (
                <li key={index} className='flex gap-2 justify-between pr-4'>
                  <h1>{item.day}:</h1>
                  <h1>{item.hours}</h1>
                </li>
              ))}
            </ul>
          </div>
          <div className='text-lg'>
            <h3>
              Please note,
              <span className='block'>
                Dogs are not allowed inside, and seating is limited.
              </span>
            </h3>
            <h3></h3>
          </div>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.9888491835553!2d15.580188256224362!3d58.39180391411697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f5c2f93e589%3A0xc68481adc53b8d81!2sDolce%20Vita%20Fika!5e0!3m2!1ssv!2sse!4v1739519990770!5m2!1ssv!2sse'
          width='300'
          height='350'
          loading='lazy'
          className='rounded-2xl h-72 w-full md:h-full lg:w-[600px] border-2 md:border-4 border-primary'
        ></iframe>
      </div>
    </div>
  );
}
