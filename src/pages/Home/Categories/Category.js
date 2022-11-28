import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Cproduct from './Cproduct';
import OrderModal from './OrderModal';

const Category = () => {
    const { user } = useContext(AuthContext)
    const [modalData, setModalData] = useState([])
    const navigate = useNavigate()
    const cameras = useLoaderData([])

    
    const handelOrder = (data) => {
        if (!user) {
            navigate('/login')
        }
        setModalData(data)
    }

    return (
        <div>
            <h1 className='text-4xl font-bold'>Category Products</h1>
            <div>
                {
                    cameras &&
                    cameras?.map(camera => <Cproduct
                        key={camera?._id}
                        camera={camera}
                        handelOrder={handelOrder}
                    ></Cproduct>)
                }
            </div>
            {
                modalData &&
                <OrderModal
                    modalData={modalData}
                ></OrderModal>
            }

        </div>
    );
};

export default Category;