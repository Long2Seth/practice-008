import Image from "next/image";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "ISTAD Ecommerce Home page ",
  description: "ISTAD Ecommerce Web is a web application for selling products",
};


export default function Home() {
  return (
    <main>
      <h1 className=' h-screen grid place-content-center text-5xl  '>Home page </h1>
    </main>
  );
}
