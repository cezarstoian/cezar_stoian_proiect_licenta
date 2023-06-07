
import IconLink from "../../components/IconLink";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import UserTable from "./components/UserTable";
import getUsers from "@/app/actions/getUsers";

export default async function ChangeUserRole() {
  const users = await getUsers()

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
      Schimbă rolul unui utilizator
      <div>
        <UserTable items={users} />
      </div>
      <div className="fixed bottom-0 mx-auto">
        <IconLink icon={HiArrowLeftOnRectangle} href={'/admin'} text={'Înapoi la pagina de administrare'} />
      </div>
    </div>
  )
}
