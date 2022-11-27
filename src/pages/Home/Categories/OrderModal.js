import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import moment from 'moment';
import Loader from '../../shared/Loader/Loader';
import { useNavigate } from 'react-router-dom';


const OrderModal = ({modalData}) => {
    const {productName, resalePrice, _id, img} = modalData
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()


    const handelOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const userPhone = form.userPhone.value;
        const userLocation = form.userLocation.value;
        const time = moment().format('Do MM YYYY, h:mm:ss a')
        
     
        const orderInfo = {
            userName,
            userEmail,
            productName,
            resalePrice,
            userPhone,
            userLocation,
            OrderId: _id,
            time,
            img
        }

        fetch('https://camera-alpha.vercel.app/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('ordered',data)
            if(data.acknowledged){
                toast.success('Your Order is successful')
                navigate('/dashboard/myOrders')
            }
            
        })
    }

    if(!user){
        return <Loader></Loader>
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl" style={{position: 'relative'}}>
                    {/* modal form */}
                    <div className='p-7 mx-auto w-full'>
                        <h2 className='text-4xl font-bold text-center'>Put Your Information</h2>
                        <form onSubmit={handelOrder} className='text-center'>
                            <div className='flex justify-center'>
                                <div className="form-control w-full max-w-xs mr-5">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    {/* //-------------------------- */}
                                    <input
                                    name='userName'
                                    disabled 
                                    type="text" 
                                    defaultValue={user?.displayName? user?.displayName : 'No Name'}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    {/* //-------------------------- */}
                                    <input 
                                    name='userEmail'
                                    disabled
                                    type="text" 
                                    defaultValue={user?.email? user?.email : 'No email'}
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
                                    disabled
                                    defaultValue={productName} 
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Resale Price</span></label>
                                    {/* //-------------------------- */}
                                    <input
                                    name='resalePrice'
                                    disabled
                                    type="text" 
                                    defaultValue={resalePrice} 
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className="form-control w-full max-w-xs mr-5">
                                    <label className="label"> <span className="label-text">Phone Number</span></label>
                                    {/* //-------------------------- */}
                                    <input 
                                    name='userPhone'
                                    onFocus={true}
                                    type="text"
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Meeting Location</span></label>
                                    {/* //-------------------------- */}
                                    <input 
                                    name='userLocation'
                                    type="text"
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            {/* <div className="w-full">
                                <label htmlFor="Order-modal" className="btn mt-10 btn-primary px-32">Confirm Order</label>
                            </div> */}
                            <button className="btn mt-10 btn-primary px-32" type='submit'>Confirm Order</button>
                        </form>
                        <label htmlFor="Order-modal" style={{position: 'absolute',top:'10px', right:'10px'}} className="font-bold text-3xl"><FaTimes /></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;