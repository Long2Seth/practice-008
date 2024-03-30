'use client';
import ProductCardComponent from '@/component/ProductCardComponent'
import { useRouter } from 'next/navigation';
import React, { use } from 'react'
import { useState,useEffect } from 'react'
import Loading from './component/loading'


const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {


  const [getData, setData] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  
  

  useEffect(() => {

    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 m-16'>{
      getData.map((item: any , index) => (
        <ProductCardComponent
        onClick={() => router.push(`/service/${item.id}`)}
        key={index} 
        title={item.title}
        price={item.price}
        image={item.image}
        />
      ))
    }
      
    </div>

  )
}
