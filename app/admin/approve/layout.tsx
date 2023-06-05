import getInactiveUsers from "@/app/actions/getInactiveUsers";
import UserList from "./components/UserList";

export default async function UserVerifyLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const users = await getInactiveUsers()
  const isEmpty = (users.length === 0)
  
  return (

      <div className="h-full">
        <UserList items={users} empty={!isEmpty} />
        {children}
      </div>
  );
}
