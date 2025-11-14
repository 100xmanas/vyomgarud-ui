import { Star, MoveRight } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-6 py-16">

      <div className="mb-6 flex items-center gap-2 opacity-80">
        <Star size={14} className="text-neutral-400" aria-hidden />
        <Star size={14} className="text-neutral-400" aria-hidden />
        <Star size={14} className="text-neutral-400" aria-hidden />
      </div>

      <p className="max-w-2xl text-neutral-300 leading-relaxed font-serif text-lg">
        Dream Recorder is a portal to your subconscious. The magical bedside
        device catches your nightly visions and plays them back as vivid,
        cinematic reels.
      </p>

       <button
          type="button"
          className="font-normal text-md capitalize flex items-center gap-2  hover:bg-white/20 hover:shadow-lg border border-white/30 rounded-full mt-8 px-8 py-3 transition-all duration-200 ease-out text-white backdrop-blur-sm cursor-pointer hover:scale-105"
        >
          BUILD YOUR OWN
          <MoveRight size={18} />
        </button>
    </div>
  );
};

export default About;
