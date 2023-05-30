import clsx from "clsx";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs"
import IconLink from "../IconLink";

const Navbar = () => {
  return (
    <div className="
      flex 
      min-h-full
      py-3
      sm:px-6  
      lg:px-4
      bg-gray-100
      justify-center
      space-x-11
      ">
      <Link
        href={'/home/about'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `,
          )}
      >Despre noi</Link>
      <Link
        href={'/home/about'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `,
          )}
      >Prețuri</Link>
      <Link
        href={'/home/about'}
        className={clsx(`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `,
          )}
      >Contact</Link>
      <IconLink icon={BsFillChatDotsFill} href={'/login'} />        
    </div>
  )
}

export default Navbar;