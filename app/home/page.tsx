import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white">
        <nav className="bg-white py-4 px-8">
          <Navbar />
        </nav>
      </div>

      <div className="flex-grow bg-purple-700">
        <p className="text-white py-4 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat. Sed malesuada quam ut venenatis lobortis. Proin finibus aliquam enim, sed lacinia nisl consequat ut. In convallis ultrices justo, ut condimentum urna tempor sit amet.
        </p>
      </div>
    </div>


  )
}
