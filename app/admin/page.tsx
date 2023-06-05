import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/app/components/Button";
import IconLink from "../components/IconLink";
import { AiOutlineSchedule } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';

export default function Admin() {
  return (
    <div className="
      flex 
      min-h-full
      flex-col 
      py-12 
      sm:px-6  
      lg:px-8 
      bg-gray-100
    ">

    Pagina de administrator

    <IconLink icon={FaUser} href={'/admin/changeUserRole'} text={'Schimbă rolul unui utilizator'}/>
    <IconLink icon={IoMdCheckmarkCircleOutline} href={'/admin/approve'} text={'Verifică datele unui utilizator'}/>
    <IconLink icon={AiOutlineSchedule} href={'/admin/schedule'} text={'Programează o întâlnire'}/>
    <IconLink icon={HiArrowLeftOnRectangle} href={'/users'} text={'Înapoi la conversații'} />
    </div>
  )
}
