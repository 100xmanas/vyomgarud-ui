function Footer() {
  return (
    <div className="w-full py-10 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between px-4 sm:px-6 lg:px-16 gap-10">
        
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold leading-none tracking-tight">
            VyomGarud.
          </h1>
        </div>

        <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          
          <div className="flex-1">
            <h5 className="uppercase mb-4 sm:mb-7">Socials</h5>
            {["instagram", "twitter (X)", "LinkedIn"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="block my-2 text-neutral-400 capitalize transition-transform hover:scale-105 duration-200 ease-out hover:shadow-md"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex-1">
            <h5 className="uppercase mb-4 sm:mb-7">Sitemap</h5>
            {["about", "technology", "careers", "media", "contact us"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="block my-2 text-neutral-400 capitalize transition-transform hover:scale-105 duration-200 ease-out hover:shadow-md"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex-1 flex flex-col items-start md:items-end">
            <p className="font-medium text-sm pb-4 md:pb-12 text-left md:text-right">
              Driven by innovation, we develop advanced aerial technologies that redefine capability and operational intelligence.
            </p>
            <button className="bg-violet-600 px-5 py-2 cursor-pointer mt-2 md:mt-0">
              Enterprise Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;