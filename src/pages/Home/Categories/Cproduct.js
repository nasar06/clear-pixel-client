import { Card } from 'flowbite-react';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const Cproduct = ({ camera, handelOrder }) => {
    const { img, productName, location, originalPrice, resalePrice, use } = camera
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-24">
                <figure><img style={{ width: '400px', height: '350px' }} src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{productName}</h2>
                    <div className='flex items-center justify-between mt-6'>
                        <span className='text-xl font-bold text-red-800 flex items-center gap-2'><FaMapMarkerAlt />{location}</span>
                        <span className='text-xl font-bold '>Years Of Use:<strong className='text-primary'>{use}</strong></span>
                    </div>
                    <div className='mt-5'>
                        <span className='text-3xl font-bold flex items-center mt-3'>OriginalPrice $:<strong className='text-red-600 line-through'>{originalPrice}</strong></span>
                        <span className='text-3xl font-bold flex items-center mt-3'>ResalePrice $:<strong className=''>{resalePrice}</strong></span>

                    </div>
                    <div className="card-actions justify-end">
                        {/* The button to open modal */}
                        <label onClick={()=>handelOrder(camera)} htmlFor="Order-modal" className="btn btn-primary">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cproduct;