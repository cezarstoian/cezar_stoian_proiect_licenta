import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import IconLink from "../../components/IconLink";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';

export default function AddUser() {
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

      Adaugă un administrator/contabil
      <IconLink icon={HiArrowLeftOnRectangle} href={'/admin'} text={'Înapoi la pagina de administrare'} />     
    </div>
  )
}
