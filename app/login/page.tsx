import Image from "next/image";
import AuthForm from "./components/AuthForm";
import IconLink from "../components/IconLink";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className="
      flex 
      min-h-full
      flex-col 
      justify-center 
      py-12 
      sm:px-6  
      lg:px-8 
      bg-gray-100
    ">
      <IconLink icon={HiArrowLeftOnRectangle} href={'/home'} text={'Înapoi la pagina principală'} />
      <div className="sm:mx-auto sm:w-full sm:max-w-md"> 
        <Image alt="Logo" height="48" width="48" className="mx-auto w-auto" src="/images/sitelogo.png" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Conectați-vă la contul dumneavoastră
        </h2>
      </div>
    
      <AuthForm />
    </div>
  )
}
