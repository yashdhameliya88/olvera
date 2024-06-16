import React from 'react';

const careers = () => {
  return (
    <section className="py-20 bg-no-repeat bg-bottom bg-left"  style={{ backgroundImage: `url('/Images/ourservice.png')`}}>
        
        <div className="container mx-auto p-4 text-black">
            <div className='flex gap-20'>
              <div className="w-full">
                <p className="text-lg text-[#C2278E] font-bold" style={{ fontFamily: 'Oswald' }}>CAREERS</p>
                <h2 className="text-3xl font-bold mt-5 leading-[75.58px]" style={{ fontFamily: 'Plus+Jakarta+Sans' }}>Careers at Olvera</h2>
                <p className='mb-2'>Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.</p>
                <button className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded-full mt-4 sm:text-base lg:text-lg">
                  Search Careers
                </button>
              </div>
            <div className="w-full textpink">
            <img
              src="/Images/careers.png"
              alt="Olvera"
              className="w-full h-full object-cover"
            />
            </div>
            </div>
        </div>
    </section>
  );
};

export default careers;