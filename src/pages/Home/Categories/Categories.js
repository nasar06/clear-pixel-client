import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
    return (
        <div>
            <h1 className='text-4xl mb-12 mt-24 font-bold'>Categories</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <div className='flex items-center text-center'>
                            <h2 className="card-title mr-5">Digital Cameras</h2>
                            <div className="text-xl text-primary"><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <div className='flex items-center text-center'>
                            <h2 className="card-title mr-5">Digital Cameras</h2>
                            <div className="text-xl text-primary"><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <div className='flex items-center text-center'>
                            <h2 className="card-title mr-5">Digital Cameras</h2>
                            <div className="text-xl text-primary"><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;