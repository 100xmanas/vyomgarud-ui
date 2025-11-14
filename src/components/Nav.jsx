import logo from "../assets/letter-v-svg.svg";
import { MoveRight, Menu, X } from "lucide-react";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="backdrop-blur-xl border rounded-full px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-10">
          <img className="h-7" src={logo} alt="logo" />

          <div className="hidden md:flex items-center gap-10">
            {["about", "Technology", "careers", "", "Media"].map((elem, index) => (
              <a
                key={index}
                href="#"
                className="font-normal text-neutral-400 hover:text-white text-md capitalize flex items-center gap-1 transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md"
              >
                {elem.length == 0 && (
                  <span className="inline-block w-px h-6 cursor-default bg-gray-400"></span>
                )}
                {elem}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hidden md:flex font-normal text-neutral-400 hover:text-white text-md capitalize items-center gap-2 transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md cursor-pointer"
        >
          contact us
          <MoveRight size={18} />
        </button>

        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
          <Menu size={24} className="text-neutral-300" />
        </label>

        <input id="menu-toggle" type="checkbox" className="peer hidden" />
      </div>

      <div className="md:hidden peer-checked:max-h-96 max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="mt-4 backdrop-blur-xl border rounded-2xl p-4 space-y-4">
          {["about", "Technology", "careers", "Media"].map((elem, index) => (
            <a
              key={index}
              href="#"
              className="block font-normal text-neutral-300 hover:text-white text-lg capitalize"
            >
              {elem}
            </a>
          ))}

          <button className="flex items-center gap-2 text-neutral-300 hover:text-white text-lg capitalize mt-2">
            contact us
            <MoveRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
