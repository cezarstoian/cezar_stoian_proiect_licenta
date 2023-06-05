import IconLink from "../../components/IconLink";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import CalendarSelect from "./components/CalendarSelect";
import getNoCollaborationUsers from "@/app/actions/getNoCollaborationUsers";
import UserSelect from "./components/UserSelect";
import AppointmentForm from "./components/AppointmentForm";

export default async function Schedule() {
  const users = await getNoCollaborationUsers()

  return (
    <div className="
      flex
      flex-col 
      min-h-full
      py-12 
      sm:px-6  
      lg:px-8 
      bg-gray-100
      gap-3
    ">
      Programează o întâlnire
      <div className="flex flex-col gap-5">
        <AppointmentForm users={users} />
      </div>
      <div className="fixed bottom-0 px-5">
        <IconLink icon={HiArrowLeftOnRectangle} href={'/admin'} text={'Înapoi la pagina de administrare'} />
      </div>
    </div>
  )
}
