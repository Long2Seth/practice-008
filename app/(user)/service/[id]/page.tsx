import React from 'react';
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

export default function Page(props: PropsType) {
    const { id } = props.params;
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData(id);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // Or use a loading component
    }

    return (
        <div className='h-screen grid place-content-center justify-center'>
            <CardDetailComponent
                title={data.title}
                description={data.description}
                image={data.image}
            />
        </div>
    );
}
