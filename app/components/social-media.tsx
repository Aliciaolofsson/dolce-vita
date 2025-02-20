export default function SocialMedia({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className='flex w-fit items-center justify-center gap-2 relative top-[0.4rem]'>
      <a
        href='https://www.facebook.com/dolcevitafika/'
        target='_blank'
        className='hover:text-secondary transition-color duration-200 ease-in-out'
      >
        <svg
          className={className}
          xmlns='http://www.w3.org/2000/svg'
          width={30}
          height={30}
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95'
          ></path>
        </svg>
      </a>
      <a
        href='https://www.instagram.com/dolce_vita_linkoping?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        target='_blank'
        className='hover:text-secondary transition-color duration-200 transform'
      >
        <svg
          className={className}
          xmlns='http://www.w3.org/2000/svg'
          width={30}
          height={30}
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
          ></path>
        </svg>
      </a>
    </div>
  );
}
