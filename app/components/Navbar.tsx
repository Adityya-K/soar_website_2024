import React from 'react'

export default function Navbar() {
  return (
    <main>
      <div className='fixed z-50 top-0 bg-[#161032] flex justify-center h-[5vh] w-screen items-center text-white'>
        <h1 className='pr-10 pl-10'>Applications</h1>
        <h1 className='pr-10 pl-10'>Gallery</h1>
        <h1 className='pr-10 pl-10'>Your Chairs</h1>
      </div>
    </main>
  )
}
