import React from 'react'
import { Card } from 'flowbite-react'
import CardDetailComponent from '@/component/CardDetailComponent'

type PropsType = {
    params: {
        id: number
    }
    search: string,
}

const ENDPOINT = 'https://fakestoreapi.com/products/';

export const getData = async (id: number) => {
    const response = await fetch(`${ENDPOINT}${id}`);
    const data = await response.json();
    return data;
}

export default async function page(props: PropsType) {
    const data = await getData(props.params.id);
    return (
        
        <div className='h-screen grid place-content-center justify-center '>
            <CardDetailComponent
            title={data.title}
            description={data.description}
            image={data.image}
        />
        </div>
    );
}
