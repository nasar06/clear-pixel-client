import { Card } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaHeart, FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Cproduct = ({ camera, handelOrder }) => {
    const { user } = useContext(AuthContext)
    const [wish, setWish] = useState(true)
    const { img, productName, sellerName, time, location, originalPrice, resalePrice, use, status } = camera

    //handel wishlist
    const handelWishList = (data) => {

        const wishData = {
            productName: data.productName,
            wname: user?.displayName,
            wemail: user?.email,
            wishList: 'love'
        }

        fetch(`https://camera-alpha.vercel.app/wishList/${data?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishData)
        })
            .then(() => {
                setWish(false)
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-24">
                <figure><img style={{ width: '400px', height: '350px' }} src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{productName}</h2>
                    <div className='flex items-center justify-between mt-6'>
                        <span className='font-bold text-red-800 flex items-center gap-2'><FaMapMarkerAlt />{location}</span>
                        <span className='font-bold '>Years Of Use: <strong className='text-primary'>{use}</strong></span>
                    </div>
                    <div className='mt-5'>
                        <span className='text-xl font-bold flex items-center mt-3'>OriginalPrice $<strong className='text-red-600 line-through'>{originalPrice}</strong></span>
                        <span className='text-xl font-bold flex items-center mt-3'>ResalePrice $<strong className=''>{resalePrice}</strong></span>

                    </div>
                    {
                        status === 'verified' ?
                            <div className='mt-4 flex items-center'>
                                <span className='font-bold mt-3 flex items-center mr-2'>Seller: <FaRegCheckCircle className='font-bold text-primary mx-1' /> <span className='text-black'> {sellerName}</span></span>
                            </div>
                            :
                            <span className='items-center font-bold mt-3'>Seller: <span className='text-black'> {sellerName}</span></span>
                    }
                    <span className='text-blue-600'>got Posted: {time.slice(0, 12)}</span>
                    <div>

                    </div>
                    <div className="card-actions justify-end items-center flex">
                        {/* The button to open modal */}

                        <FaHeart onClick={() => handelWishList(camera)} className='text-3xl mr-5' style={wish ? { color: 'gray' } : { color: 'red' }}></FaHeart>
                        <label onClick={() => handelOrder(camera)} htmlFor="Order-modal" className="btn btn-primary text-white">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cproduct;