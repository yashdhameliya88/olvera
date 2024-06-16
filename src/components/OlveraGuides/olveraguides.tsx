import React from 'react';

const olveraguides = () => {
  return (
    <div className="bg-cover bg-center items-center justify-between pt-10 p-[100px] pt-[122px] pb-[50px] pl-[152px] relative" style={{ backgroundImage: `url('/Images/OlveraGuides.png')`}}>
      <h2 className="text-white font-bold text-2xl">
        Olvera Guides
      </h2>
      <div className="flex items-center gap-5 text-white text-sm text-start w-1/4 ml-auto pt-20">
        <a className='text-center'>View More</a> 
        <img
          src="/Images/viewmoreicon1.png"
          alt="Olvera"
          className="lg:h-20 md:h-10 sm:h-8 xs:h-6"
        />
      </div>
      <div className='flex justify-between items-center	text-white w-1/2 pt-20'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default olveraguides;