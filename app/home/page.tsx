'use client';

import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  const reviews = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white py-4 px-8">
        <Navbar page="home" />
      </div>
      <div className="bg-black w-full h-[2px]"></div>

      <div className="flex-grow bg-custom-purple">
        <div className="container mx-auto py-8 px-4">
          <p className="text-white text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat. Sed malesuada quam ut venenatis lobortis. Proin finibus aliquam enim, sed lacinia nisl consequat ut. In convallis ultrices justo, ut condimentum urna tempor sit amet.
          </p>
          <div className="bg-white h-60 text-custom-purple flex items-center justify-center">
            <h2 className="text-3xl font-bold">Ceva interesant menit să atragă atenția</h2>
          </div>
          <div className="text-white mt-8">
            <h3 className="text-xl font-semibold mb-4">De ce să lucrezi cu noi:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="mb-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </li>
              <li className="mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </li>
              <li className="mb-2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="mb-2">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Titlul interesant al unei secțiuni </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat. Sed malesuada quam ut venenatis lobortis. Proin finibus aliquam enim, sed lacinia nisl consequat ut. In convallis ultrices justo, ut condimentum urna tempor sit amet.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Titlul unei alte secțiuni</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat risus ut aliquam consequat. Sed malesuada quam ut venenatis lobortis. Proin finibus aliquam enim, sed lacinia nisl consequat ut. In convallis ultrices justo, ut condimentum urna tempor sit amet.
            </p>
          </div>
          <div className="mt-8 text-custom-purple">
            <h3 className="text-2xl font-semibold flex items-center justify-center bg-white">Recenziile clienților</h3>
            <div className="relative overflow-hidden">
              <div className="h-40 overflow-y-hidden ">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full transform bg-white ${
                      index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    } transition-all duration-500`}
                  >
                    <p className="text-custom-purple flex items-center justify-center bg-white mb-2">{review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-custom-purple text-white py-2 px-4 rounded-md hover:bg-white hover:text-custom-purple transition-colors">
              Sună-ne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
