import Navbar from "../../components/navbar/Navbar";

export default function About() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white py-4 px-8">
        <Navbar page="about" />
      </div>
      <div className="bg-black w-full h-[2px]"></div>

      <div className="flex bg-custom-purple text-white items-center justify-center flex-col h-screen">
        <div className="max-w-2xl p-8">
          <h1 className="text-4xl font-bold mb-4">Despre noi</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo ultricies elit, sed interdum risus varius id. Sed et metus
            nec tortor pretium finibus.
          </p>
          <p className="text-lg mt-4">
            Nulla facilisi. Sed sed neque id enim volutpat finibus. Duis
            venenatis, sem vel varius laoreet, ex ante facilisis lorem, nec
            viverra risus dolor ac arcu.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Missiunea noastră</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              commodo ultricies elit, sed interdum risus varius id. Sed et metus
              nec tortor pretium finibus.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Valorile noastre ca echipă</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
              <li>Ut labore et dolore magna aliqua</li>
              <li>Ut enim ad minim veniam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
