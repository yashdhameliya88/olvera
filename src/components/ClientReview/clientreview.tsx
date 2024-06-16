import React from 'react'

const clientreview = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-black">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">What our clients say about us</h2>
      <p className="text-gray-500">Hear from our happy customers.</p>
    </div>
      <div className='flex'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-pink-500 p-8 rounded-lg shadow-lg">
          <p className="text-white text-lg">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ”</p>
          <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <img
                src="/Images/icon-white.png"
                alt="Olvera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-white">Aaron Boby</h3>
              <p className="text-sm text-white">2 November 2021</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg">“Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ”</p>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img
              src="/Images/Icon.png"
              alt="Olvera"
              className="w-full h-full object-cover"
            />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Daren Axell</h3>
              <p className="text-sm text-gray-600">29 August 2021</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ”</p>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img
              src="/Images/Icon.png"
              alt="Olvera"
              className="w-full h-full object-cover"
            />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Dion Channing</h3>
              <p className="text-sm text-gray-600">22 August 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[300px] mt-auto mb-auto'>
        <img
          src="/Images/RightArrow.png"
          alt="Olvera"
          className=""
        />
      </div>
    </div>
  </div>
  )
}

export default clientreview