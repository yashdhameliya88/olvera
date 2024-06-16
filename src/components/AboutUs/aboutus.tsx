import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-cover bg-center items-center justify-between pt-10 aboutus" style={{ backgroundImage: `url('/Images/aboutus_bg.png')`}}>
      <h2 className="text-white text-xl" style={{ fontFamily: 'Plus+Jakarta+Sans' }}>
        About Olvera
      </h2>
      <div className="text-white text-sm text-start w-1/4 ml-auto aboutinfo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className='flex justify-between items-center	'>
      <img
            src="/Images/howards.png"
            alt="Howards"
            className=""
          />
      <img
            src="/Images/commonwealthbank.png"
            alt="Commonwealth Bank"
            className=" "
          />
      <img
            src="/Images/ELLERY.png"
            alt="ELLERY"
            className=""
          />
      <img
            src="/Images/GINGER.png"
            alt="GINGER"
            className=""
          />
      </div>
    </div>
  );
};

export default AboutUs;