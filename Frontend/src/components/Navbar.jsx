import React from 'react'

function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-6 md:px-40 shadow-2xl h-16 py-4 fixed font-poppins bg-pink-400'>
        <div className='flex justify-between font-Pixelify_sans'>
            <h1 className='cursor-pointer text-2xl font-bold text-white'>Word<span className='text-3xl text-lime-400'>To</span>PDF</h1>
            <h1 className='cursor-pointer text-2xl font-bold hover:scale-125 duration-200 text-white rounded-md py-1'>Home</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar