export default function CurlyArrow({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        className='size-32 md:size-24 lg:size-full'
        width='112'
        height='141'
        viewBox='0 0 112 141'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M79.5291 2.26847C145.929 47.6174 88.4024 134.259 55.3609 107.131C32.8015 88.6099 48.1279 63.2791 72.0462 84.5873C95.9645 105.895 61.3287 143.242 2.32082 125.371M2.32082 125.371L12.4285 117.211M2.32082 125.371L12.4729 139.162'
          stroke='#2F4F4F'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}
