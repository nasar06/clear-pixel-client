import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../shared/Loader/Loader';

const Advertised = () => {

    const {data:addProducts=[]} = useQuery({
        queryKey: ['advertise'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/advertise/${'add'}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log('add----------', addProducts)
    if(addProducts ==0){
        return
    }
    return (
        <div>
            <h1 className='mt-24 text-center mb-12 text-4xl font-bold'>ADVERTISED</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                {
                    addProducts &&
                    addProducts.map(addProduct => <div 
                    key={addProduct?._id}
                    className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={addProduct?.img} alt="Movie" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">{addProduct?.productName.slice(0, 10 + '...')}</h2> */}
                        <h3 className='text-xl '>OriginalPrice: $<span className='line-through text-red-600 font-bold'>{addProduct?.originalPrice}</span></h3>
                        <h3 className='text-xl '>ResellPrice: <span className='font-bold'>${addProduct?.resalePrice}</span></h3>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white">Details</button>
                        </div>
                    </div>
                </div>
                )
                }
                
            </div>
        </div>
    );
};

export default Advertised;