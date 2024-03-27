import Image from 'next/image';
export default function Header() {
  return (
    <div>
      {/* left  */}
      <div className='flex item-center justify-between max-w max-w-6xl'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0nmJMLL5Emjx9lek2nC9QFzjjGS0qhb6Cd_FvBIp3l4K9g7J-1pJqcEUWb-_zgM4Z0g&usqp=CAU'
            alt='logo'
            layout='fill'
            className='object-contain'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative  lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
            alt='logo'
            layout='fill'
            className='object-contain'
          />
        </div>
        <div>
          <h1>Right Side</h1>
        </div>
      </div>
      {/* middle */}
      {/* right */}
    </div>
  );
}
