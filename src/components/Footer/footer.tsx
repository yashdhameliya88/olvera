import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full'>
      <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
        <div className='flex flex-wrap justify-center mb-10'>
          <h1 className='text-5xl font-bold text-white'>We are open and accepting to all.</h1>
          <h1 className='text-5xl font-bold text-white'>Come work with us</h1>
        </div>
        <div className='flex flex-wrap text-center px-20 justify-center mb-4'>
            <p>Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.</p>
        </div>
        <div className='flex flex-wrap text-center px-20 justify-center mb-10'>
            <button className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded-full mt-4 sm:text-base lg:text-lg">
                Get Started
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
                <img
                    src="/Images/OlveraFirstLogo.png"
                    alt="Olvera"
                    className="h-15 lg:h-15 md:h-15 sm:h-8 xs:h-6 logo mb-5"
                />
                <img
                    src="/Images/OlveraCapital.png"
                    alt="Olvera"
                    className="h-150 lg:h-15 md:h-15 sm:h-8 xs:h-6 logo mb-5"
                />
                <a>Turning Uncertainty Into Your Advantage</a>
            </div>
            <div className='mt-10'>
                <div>Resources</div>
                <div>Home</div>
                <div>Articles</div>
                <div>Videos & Guides</div>
                <div>About Us</div>
            </div>
            <div className='mt-10'>
                <div>Careers</div>
                <div>Olevera academy</div>
                <div>Privacy Policy</div>
                <div>Cookies</div>
            </div>
            <div className='mt-10'>
                <div>Liability Limited By A Scheme Approved Under Professional Services Scheme</div>
                <div>Phone: (64) 09 973 4905</div>
                <div>Email: ezibuyenquiries@olveraadvisors.com </div>
                <div>Website: olvera.co.nz/ezibuy</div>
            </div>
        </div>
      </div>
      <hr />
      <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
        <div className="flex justify-between">
        <div>©2023 olevra advisors. All rights reserved</div>
        <div className="flex gap-10">
            <img
            src="/Images/FacebookLogo.png"
            alt="Facebook"
            />
            <img
            src="/Images/InstagramLogo.png"
            alt="Instagram"
            />
            <img
            src="/Images/TwitterLogo.png"
            alt="Twitter"
            />
            <img
            src="/Images/LinkedinLogo.png"
            alt="Linkedin"
            />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer