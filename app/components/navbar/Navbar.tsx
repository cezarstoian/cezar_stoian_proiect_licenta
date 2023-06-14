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
    <div className="flex min-h-full py-3 bg-white justify-center items-center">
      <div className="flex items-center">
        <div className="mr-10">
          <Image alt="Logo" height="40" width="40" src="/images/site-logo.png" />
        </div>
        <div className="flex gap-x-11">
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
        </div>
      </div>
      <IconLink icon={BsFillChatDotsFill} href={'/login'} />        
    </div>
  )
}

export default Navbar;