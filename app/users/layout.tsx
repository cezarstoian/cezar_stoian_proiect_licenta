import Sidebar from "../components/sidebar/Sidebar";


export default async function UsersLayout({
  children
}: {
  children: React.ReactNode,
}) {

  return (
    // This comment fixes the error
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        {children}
      </div>
    </Sidebar>
  );
}
