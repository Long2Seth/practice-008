import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className='h-screen grid place-content-center'>
      <Image
        src="https://i.stack.imgur.com/kOnzy.gif" // Corrected the src attribute
        alt="Loading"
        width={100}
        height={100}
      />
      
    </div>
  )
}
