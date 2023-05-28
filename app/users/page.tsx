import EmptyState from "../components/EmptyState";

const Users = () => {
  return (
    // <button onClick={() => signOut()}> 
    //   Ieși din cont 
    // </button>
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  )
}

export default Users;