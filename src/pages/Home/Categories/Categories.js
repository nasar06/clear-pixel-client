import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';



const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data
        }
    })



    return (
        <div>
            <h1 className='text-4xl mb-12 mt-24 font-bold'>Categories</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>

                {
                    categories &&
                    categories.map(category => <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={category?.categoryImage} style={{width:'100%'}} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <div className='flex items-center text-center'>
                                <h2 className="card-title mr-5">{category?.categoryName}</h2>
                                <div className="text-xl text-primary"><FaArrowRight /></div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Categories;