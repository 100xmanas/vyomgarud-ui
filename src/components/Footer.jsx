
function Footer() {
  return (
    <div className='w-full py-10 bg-[#0a0a0a] text-white'>
      <div className='max-w-7xl mx-auto flex items-end justify-between'>
        <div>
            <h1 className='text-8xl text-white font-semibold leading-none tracking-tight'>VyomGarud.</h1>
        </div>
        <div className='w-[50%] flex items-start justify-between'>
            <div className='basis-1/3'>
                <h5 className='uppercase mb-7'>socials</h5>
                {
                    ["instagram", "twitter (X)", "LinkedIn"].map((item, index)=>(
                        <a href="" key={index} className='block my-2 transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md text-neutral-400 capitalize'>{item}</a>
                    ))
                }
            </div>
            <div className='basis-1/3'>
                <h5 className='uppercase mb-7'>sitemap</h5>
                {
                    ["about", "technology", "careers", "media", "contact us"].map((item, index)=>(
                        <a href="#" key={index} className='block my-2 text-neutral-400 capitalize transition-scale hover:scale-105 transition-all duration-200 ease-out hover:shadow-md'>{item}</a>
                    ))
                }
            </div>
            <div className='basis-2/3 flex flex-col items-end'>
                <p className='font-medium text-right text-sm pb-12'>Driven by innovation, we develop advanced aerial technologies that redefine capability and operational intelligence.</p>
                <button className='bg-violet-600 px-5 py-1.5 cursor-pointer'>Enterprise Partner</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer