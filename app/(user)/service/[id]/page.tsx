import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import CardDetailComponent from '@/component/CardDetailComponent';

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

const Page: React.FC<PropsType> = (props) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(props.params.id);
            setData(result);
        };
        fetchData();
    }, [props.params.id]);

    if (!data) {
        return <div>Loading...</div>;
    }

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

export default Page;
