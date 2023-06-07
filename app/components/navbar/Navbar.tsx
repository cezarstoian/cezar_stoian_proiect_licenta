import clsx from "clsx";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs"
import IconLink from "../IconLink";
import Image from 'next/image';

const Navbar = ({

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
      <Image alt="Logo" height="40" width="40" className="mx-auto w-auto h-auto fixed left-12 flex items-center justify-center" src="/images/site-logo.png" />
      <Link
        href={'/home'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            leading-6 
            font-semibold 
            text-lg
          `,
          )}
      >Despre noi</Link>
      <Link
        href={'/home/prices'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-lg
            leading-6 
            font-semibold
          `,
          )}
      >Tarife</Link>
      <Link
        href={'/home/about'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-lg
            leading-6 
            font-semibold 
          `,
          )}
      >Contact</Link>
      <IconLink icon={BsFillChatDotsFill} href={'/login'} />        
    </div>
  )
}

export default Navbar;