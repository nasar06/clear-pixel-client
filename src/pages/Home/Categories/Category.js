import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cproduct from './Cproduct';

const Category = () => {

    const cameras = useLoaderData([])
    console.log(cameras)
    return (
        <div>
            <h1 className='text-4xl font-bold'>Category Products</h1>
            <div>
                {
                    cameras&&
                    cameras?.map(camera => <Cproduct
                        key={camera?._id}
                        camera={camera}
                    ></Cproduct>)
                }
            </div>
        </div>
    );
};

export default Category;