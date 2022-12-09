import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyWishlist = () => {

    const {user} = useContext(AuthContext)
    //get wishlistProducts
    const { data: wishlistProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishList/${user?.email}`)
            const data = await res.json();
            return data
        }
    })

    //
    const handelDelete =(id) =>{
        fetch(`http://localhost:5000/wishlist/${id}`, {
            method: 'DELETE'
        })
            .then(data => {
                toast.success('wishProduct is deleted')
                refetch()
            })
            .catch(err => console.error(err))
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
                        wishlistProducts &&
                        wishlistProducts.map(wishProduct => <Table.Row
                            key={wishProduct?._id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {wishProduct?.productName.slice(0, 40) + '...'}
                                {/* {description.slice(0, 100) + '...'} */}
                            </Table.Cell>
                            <Table.Cell>
                                {/* {wishProduct?.location} */}
                            </Table.Cell>
                            <Table.Cell>
                                {/* {wishProduct?.resalePrice} */}
                            </Table.Cell>
                            <Table.Cell>
                              

                            </Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handelDelete(wishProduct?._id)} className='text-red-600 font-bold text-2xl'><FaTrashAlt /></button>

                            </Table.Cell>
                        </Table.Row>
                        )
                    }

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyWishlist;