import React from 'react'

const home = () => {
  return (
    <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-black to-white-500 opacity-70'></div>
        <img
            src="/Images/masterimage.png"
            alt="Olvera"
            className="w-full h-full object-cover"
          />
          <div className='absolute top-1/2 left-0 right-0 bottom-0 transform-translate-y-1/2 mx-20'>
            <h1 className='text-white lg:text-5xl sm:text-xl font-bold lg:my-10 sm:my-5 ' style={{ fontFamily: 'Montserrat' }}>Start your story</h1>
            <h1 className='text-white lg:text-5xl sm:text-xl font-bold lg:my-10 sm:my-5' style={{ fontFamily: 'Montserrat' }}>with Olvera</h1>
            <button className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded-full mt-4 sm:text-base lg:text-lg" style={{ fontFamily: 'Oswald' }}>
              CONTACT US
            </button>
          </div>
    </div>
  )
}

export default home