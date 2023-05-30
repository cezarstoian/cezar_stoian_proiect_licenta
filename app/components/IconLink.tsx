import { IconType } from "react-icons";
import Link from "next/link";
import clsx from "clsx";

interface IconLinkProps {
  icon: IconType;
  href: string;
  children?: React.ReactNode;
  text?: string;
}

const IconLink: React.FC<IconLinkProps> = ({ 
  icon: Icon,
  href,
  children,
  text,
}) => {

  return ( 
    <Link
      href={href}
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
    >
      <Icon />
      {text}
    </Link>
   );
}

export default IconLink;