import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import moment from 'moment';
import toast from 'react-hot-toast';
import Loader from '../../shared/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [category, setCategory] = useState('01')

    //set category
    const handelCategory = (e) =>{
        setCategory(e.target.value)
    }
    

    const handelOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const productName = form.productName.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const sellerPhone = form.sellerPhone.value;
        const use = form.use.value;
        const img = form.img.value;
        const description = form.description.value;
        const condition = form.condition.value;
        const time = moment().format('Do MM YYYY, h:mm:ss a')


        const orderInfo = {
            sellerName,
            sellerEmail,
            productName,
            location,
            originalPrice,
            resalePrice,
            sellerPhone,
            categoryId: category,
            use,
            condition,
            img,
            description,
            time,
        }
        console.log(orderInfo)

        fetch('https://camera-alpha.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('add product-------', data)
                if (data.acknowledged) {
                    toast.success('Your Order is successful')
                    navigate('/dashboard/myProducts')
                }

            })
    }

    
    return (
        <div>
            <form onSubmit={handelOrder} className='text-center'>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Name</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='sellerName'
                            disabled
                            type="text"
                            defaultValue={user?.displayName ? user?.displayName : 'No Name'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='sellerEmail'
                            disabled
                            type="text"
                            defaultValue={user?.email ? user?.email : 'No email'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='productName'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text">Location</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='location'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='originalPrice'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='resalePrice'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='sellerPhone'
                            onFocus={true}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        {/* //-------------------------- */}
                        <select onChange={handelCategory} className="select w-full max-w-xs select-bordered">
                            <option disabled selected value='01'>Digital Cameras</option>
                            <option value='02'>Film Cameras</option>
                            <option value='03'>Video Cameras</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Years of Use</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='use'
                            onFocus={true}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Condition</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='condition'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs mr-5">
                        <label className="label"> <span className="label-text">Image Url</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='img'
                            onFocus={true}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Description</span></label>
                        {/* //-------------------------- */}
                        <input
                            name='description'
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <button className="btn mt-10 btn-primary px-32 font-bold text-white" type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;