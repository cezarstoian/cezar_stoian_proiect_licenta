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
      justify-items-center
      justify-center
      font-bold
      left-0
      text-lg
    ">

      <div className="mx-auto mb-4">
        Pagina de administrator
      </div>
      <div className="mx-auto">
        <div className="border border-solid border-gray-500 rounded-md mb-4">
          <IconLink icon={FaUser} href={'/admin/changeUserRole'} text={'Schimbă rolul unui utilizator'}/>
        </div>
        <div className="border border-solid border-gray-500 rounded-md mb-4">
          <IconLink icon={IoMdCheckmarkCircleOutline} href={'/admin/approve'} text={'Verifică datele unui utilizator'}/>
        </div>
        <div className="border border-solid border-gray-500 rounded-md mb-4">
          <IconLink icon={AiOutlineSchedule} href={'/admin/schedule'} text={'Programează o întâlnire'}/>
        </div>
        <div className="border border-solid border-gray-500 rounded-md mb-4">
          <IconLink icon={HiArrowLeftOnRectangle} href={'/users'} text={'Înapoi la conversații'} />
        </div>
      </div>
    </div>
  )
}
