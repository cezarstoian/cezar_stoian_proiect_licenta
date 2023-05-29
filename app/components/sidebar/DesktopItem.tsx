import clsx from 'clsx';
import Link from "next/link";
import { User } from "@prisma/client";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
  user?: User;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ 
  label, 
  href, 
  icon: Icon, 
  active,
  onClick,
  user,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  const showAdminPage = (!(user?.role === 'admin') && (label === 'Admin'))
  console.log(`SHOW ADMIN ${showAdminPage} for ${label}`)

  return ( 
    <li onClick={handleClick} key={label} hidden={showAdminPage}>
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
            active && 'bg-gray-100 text-black'
          )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
   );
}
 
export default DesktopItem;