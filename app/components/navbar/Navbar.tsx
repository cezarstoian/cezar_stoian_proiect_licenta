import clsx from "clsx";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs"
import IconLink from "../IconLink";
import Image from 'next/image';

interface NavbarProps {
  page: string;
}

const Navbar: React.FC<NavbarProps>= ({
  page,
}) => {
  return (
    <div className="
      flex 
      min-h-full
      py-3
      sm:px-6  
      lg:px-4
      justify-center
      justify-items-center
      space-x-11
      bg-white
      ">
      <Image alt="Logo" height="40" width="40" className="mx-auto w-auto h-auto left-12 fixed items-center" src="/images/site-logo.png" />
      <Link
        href={'/home'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-xl 
            p-3 
            leading-6 
            font-semibold 
            text-lg
            text-custom-purple
            hover:bg-gray-100
          `, page === 'home' ? 'bg-gray-200' : 'bg-white'
          )}
      >De ce noi?</Link>
      <Link
        href={'/home/prices'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-lg 
            p-3 
            text-lg
            leading-6 
            font-semibold
            text-custom-purple
            hover:bg-gray-100
          `, page === 'prices' ? 'bg-gray-200' : 'bg-white'
          )}
      >Tarife</Link>
      <Link
        href={'/home/about'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-lg 
            p-3 
            text-lg
            leading-6 
            font-semibold
            text-custom-purple
            hover:bg-gray-100
          `, page === 'about' ? 'bg-gray-200' : 'bg-white'
          )}
      >Despre noi</Link>
      <IconLink icon={BsFillChatDotsFill} href={'/login'} />        
    </div>
  )
}

export default Navbar;