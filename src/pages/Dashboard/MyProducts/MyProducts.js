import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    //get sellerProducts
    const { data: sellerProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://camera-alpha.vercel.app/myProducts?email=${user?.email}`)
            const data = await res.json();
            return data

        }
    })

    //delete sellers product
    const handelDelete = (id) => {
        fetch(`https://camera-alpha.vercel.app/myProducts/${id}`, {
            method: 'DELETE'
        })
            .then(data => {
                toast.success('product is deleted')
                refetch()
            })
            .catch(err => console.error(err))
    }

    //put one property
    const handelAdvertised = (id) => {
        fetch(`https://camera-alpha.vercel.app/advertise/${id}`, {
            method: 'PUT'
        })
            .then(data => {
                toast.success('Advertised your Product')
                refetch()
            })
            .catch(err => console.error(err))
    }

    if (!user) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Location
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        sellerProducts &&
                        sellerProducts.map(sellerProduct => <Table.Row
                            key={sellerProduct?._id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sellerProduct?.productName.slice(0, 40) + '...'}
                                {/* {description.slice(0, 100) + '...'} */}
                            </Table.Cell>
                            <Table.Cell>
                                {sellerProduct?.location}
                            </Table.Cell>
                            <Table.Cell>
                                {sellerProduct?.resalePrice}
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    sellerProduct?.advertise === 'add' ?

                                    <button className='px-3 bg-blue-400 text-white rounded'>Added</button>
                                    :
                                    <button onClick={() => handelAdvertised(sellerProduct?._id)} className='px-3 bg-primary text-white rounded'>Advertise</button>
                                }

                            </Table.Cell>
                            <Table.Cell>
                            <button onClick={() => handelDelete(sellerProduct?._id)} className='text-red-600 font-bold text-2xl'><FaTrashAlt /></button>
                               
                            </Table.Cell>
                        </Table.Row>
                        )
                    }

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyProducts;