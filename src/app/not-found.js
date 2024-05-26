import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>404</h1>
      <h2 className='text-2xl'>This Page is not Found</h2>
      <Link href={"/"}><button className='bg-black text-white px-4 py-2 rounded-lg'>Go Home</button></Link>
    </div>
  )
}

export default NotFound
