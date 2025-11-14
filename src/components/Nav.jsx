import logo from "../assets/letter-v-svg.svg";
import { MoveRight } from "lucide-react";

const Nav = () => {
  return (
    <div className="max-w-7xl backdrop-blur-xl border rounded-full mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <img className="h-7" src={logo} alt="" />

        {["about", "Technology", "careers", "", "Media"].map((elem, index) => (
          <a
            key={index}
            href="#"
            className="font-normal text-neutral-400 hover:text-white text-md capitalize flex items-center gap-1 transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md"
          >
            {elem.length == 0 && (
              <span className="inline-block w-px h-6 cursor-none bg-gray-400"></span>
            )}
            {elem}
          </a>
        ))}
      </div>
      <button
        type="button"
        className="font-normal text-neutral-400 hover:text-white text-md capitalize flex items-center gap-2 transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md cursor-pointer"
      >
        contact us
        <MoveRight size={18}/>
      </button>
    </div>
  );
};

export default Nav
