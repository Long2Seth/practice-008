import React from 'react'
import Image from 'next/image'

export default function Loading() {
    return (
        <div className='h-screen grid place-content-center'>
      <Image
        src="https://i.stack.imgur.com/kOnzy.gif"
        alt="Loading"
        width={100}
        height={100}
      />
      <h1 className='text-5xl font-bold'>
        Loading ....
      </h1>
    </div>
    )
}
