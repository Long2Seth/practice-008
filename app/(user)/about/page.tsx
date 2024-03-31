import React from 'react'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "ISTAD Ecommerce About US page ",
  description: "ISTAD Ecommerce Web is providing the best services for you",
};

export default function page() {
  return (
    <h1 className=' h-screen grid place-content-center text-5xl  '>About</h1>
  )
}


