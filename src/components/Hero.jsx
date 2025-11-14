import hero from "../assets/hero-video.mp4";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        src={hero}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-5 left-0 w-full z-20">
        <Nav />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wide">
          VyomGarud
        </h1>

        <p className="text-neutral-300 text-lg md:text-2xl mt-4 max-w-xl">
          Transforming innovation into reality with next-generation aerospace
          solutions.
        </p>

        <button
          type="button"
          className="font-normal text-md capitalize flex items-center gap-2  hover:bg-white/20 hover:shadow-lg border border-white/30 rounded-full mt-8 px-8 py-3 transition-all duration-200 ease-out text-white backdrop-blur-sm cursor-pointer"
        >
          contact us
          <MoveRight size={18} />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
