import React from 'react'
import Image from 'next/image'

export default function Loading() {
    return (
        <div className='h-screen grid place-content-center'>
      <img src="	https://i.pinimg.com/originals/4e/8c/91/4e8c9197c64747175890b4f8cd740bb7.gif" alt="loading" />
      <h1 className='text-5xl font-bold'>
        Loading ....
      </h1>
    </div>
    )
}
