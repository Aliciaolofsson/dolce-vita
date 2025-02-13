export default function CoffeeBtn() {
  return (
    <div className='bg-primary w-fit group rounded-lg md:rounded-xl hover:bg-primary-foreground transition-colors duration-300'>
      <a href='#find-us' className='block'>
        <div className='flex py-3 px-16 whitespace-nowrap md:px-10 md:py-3 lg:px-12 gap-4 items-center'>
          <h1 className='relative text-white tracking-wide top-1 text-2xl'>
            Visit Us
          </h1>
          <svg
            width='36'
            height='30'
            viewBox='0 0 41 35'
            xmlns='http://www.w3.org/2000/svg'
            className='transition-all duration-300'
          >
            <circle
              fill='transparent'
              cx='17.1323'
              cy='17.5'
              r='15.8824'
              stroke='white'
              strokeWidth='1.5'
            />
            <circle
              fill='transparent'
              cx='17.1323'
              cy='17.5'
              r='13.0148'
              stroke='white'
              strokeWidth='1.5'
            />
            <path
              fill='transparent'
              className='group-hover:fill-red-700 transition-all duration-300'
              d='M21.95 19.9286C22.9755 18.9997 24.0148 17.8862 24.0148 16.4292C24.0148 15.5011 23.6159 14.611 22.9061 13.9547C22.1962 13.2985 21.225 12.8105 20.2294 12.9298C18.1647 13.1773 18.1647 14.4499 17.1324 15.4042C16.1 14.4499 16.1 13.1774 14.0353 12.9298C13.0397 12.8104 12.0686 13.2985 11.3587 13.9547C10.6488 14.611 10.25 15.5011 10.25 16.4292C10.25 17.8926 11.2824 19.006 12.3147 19.9286L17.1324 24.3824L21.95 19.9286Z'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              fill='transparent'
              d='M33.1913 14.0588H37.5001C38.6047 14.0588 39.5001 14.9543 39.5001 16.0588V18.9412C39.5001 20.0458 38.6047 20.9412 37.5001 20.9412H33.1913'
              stroke='white'
              strokeWidth='1.5'
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
