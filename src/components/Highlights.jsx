const Highlight = ({ title, text, img, reverse }) => {
  return (
    <div
      className={` 
        w-full min-h-[60vh]
        flex flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""}

        items-stretch
        px-6 md:px-16 py-5 gap-10
      `}
    >
 
      <div className="md:w-1/2 w-full aspect-square rounded-xl overflow-hidden shadow-lg ">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center text-white gap-4">
        <h2 className="text-4xl md:text-5xl font-semibold capitalize">
          {title}
        </h2>

        <p className="text-neutral-300 leading-relaxed max-w-[500px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
