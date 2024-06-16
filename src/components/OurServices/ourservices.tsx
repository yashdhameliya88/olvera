import React from 'react';

const ourservices = () => {
  return (
    <section className="py-20 bg-no-repeat bg-bottom bg-left"  style={{ backgroundImage: `url('/Images/ourservice.png')`}}>
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center mb-20">
                <div className="w-full flex align-center justify-between textpink font-bold">
                    <div className='text-center'>
                      <h3 className="text-3xl text-[62px] leading-[75.58px]"  style={{ fontFamily: 'Montserrat Alternates' }}>150+</h3>
                      <p className="text-lg text-black"  style={{ fontFamily: 'Montserrat' }}>Projects</p>
                    </div>
                    <div className='text-center'>
                      <h3 className="text-3xl text-[62px] leading-[75.58px]" style={{ fontFamily: 'Montserrat Alternates' }}>80+</h3>
                      <p className="text-lg text-black" style={{ fontFamily: 'Montserrat' }}>Clients</p>
                    </div>
                    <div className='text-center'>
                      <h3 className="text-3xl text-[62px] leading-[75.58px]" style={{ fontFamily: 'Montserrat Alternates' }}>200+</h3>
                      <p className="text-lg text-black" style={{ fontFamily: 'Montserrat' }}>Professionals</p>
                    </div>
                    <div className='text-center'>
                      <h3 className="text-3xl text-[62px] leading-[75.58px]" style={{ fontFamily: 'Montserrat Alternates' }}>97%</h3>
                      <p className="text-lg text-black" style={{ fontFamily: 'Montserrat' }}>Clients</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto p-4 text-black">
            <div className='flex gap-20'>
              <div className="w-full">
                <p className="text-lg text-[#C2278E] font-bold" style={{ fontFamily: 'Oswald' }}>SERVICES</p>
                <h2 className="text-3xl font-bold mt-5 leading-[75.58px]" style={{ fontFamily: 'Plus+Jakarta+Sans' }}>Our Services That Can Help Your Business</h2>
                <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            <div className="w-full textpink">
                <div className="">
                    <div className='flex justify-between align-center border-bottom'>
                      <div className=''>
                      <h2 className="text-2xl font-bold mb-2 w-full text-start text-black" style={{ fontFamily: 'Montserrat Alternates' }}>Sustainability</h2>
                      </div>
                      <div className=''>
                      <i className="fa-solid fa-arrow-right text-black"></i>
                      </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-lg  text-[#C2278E]">02.</p>
                    <div className='flex justify-between align-center border-bottom'>
                      <div className=''>
                      <h2 className="text-2xl font-bold mb-2 w-full text-end text-black" style={{ fontFamily: 'Montserrat Alternates' }}>Small Business</h2>
                      </div>
                      <div className=''>
                      <i className="fa-solid fa-arrow-right text-black"></i>
                      </div>
                    </div>
                </div>
                <div className="">
                <p className="text-lg  text-[#C2278E]">03.</p>
                    <div className='flex justify-between align-center border-bottom'>
                      <div className=''>
                      <h2 className="text-2xl font-bold mb-2 w-full text-end text-black" style={{ fontFamily: 'Montserrat Alternates' }}>Forensic Services</h2>
                      </div>
                      <div className=''>
                      <i className="fa-solid fa-arrow-right text-black"></i>
                      </div>
                    </div>
                </div>
                <div className="">
                  <p className="text-lg  text-[#C2278E]">04.</p>
                    <div className='flex justify-between align-center border-bottom'>
                    <div className=''>
                    <h2 className="text-2xl font-bold mb-2 w-full text-end text-black" style={{ fontFamily: 'Montserrat Alternates' }}>Risk Management</h2>
                    </div>
                    <div className=''>
                    <i className="fa-solid fa-arrow-right text-black"></i>
                    </div>
                    </div>
                </div>
                <div className="">
                  <p className="text-lg  text-[#C2278E]">05.</p>
                    <div className='flex justify-between align-center border-bottom'>
                    <div className=''>
                    <h2 className="text-2xl font-bold mb-2 w-full text-black" style={{ fontFamily: 'Montserrat Alternates' }}>CFO Advisory</h2>
                    </div>
                    <div className=''>
                    <i className="fa-solid fa-arrow-right text-black"></i>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default ourservices;