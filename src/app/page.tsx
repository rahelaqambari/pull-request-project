import React from 'react'

function page() {
  return (
    <div className='w-full relative bg-black h-screen flex items-center justify-center '>
      <h1 className='text-5xl bg-linear-150 p-8  text-transparent bg-clip-text  animate-pulse from-green-700 to-orange-700 via-red-200'>Home Page</h1>
      <p className='w-5xl p-4 text-sm font-semibold text-center text-green-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos quia possimus iste laborum aut, est numquam quis. Repellendus et rerum earum nostrum voluptate culpa, sint explicabo. Ut, expedita quisquam?</p>
      {/* <div className=' h-40 w-40 right-6 top-8 rounded-full bg-linear-150  animate-pulse from-green-700 to-orange-700 via-red-200 border-2'></div> */}
    </div>
  )
}

export default page
