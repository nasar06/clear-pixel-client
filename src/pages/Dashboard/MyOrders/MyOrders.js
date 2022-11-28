import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`https://camera-alpha.vercel.app/myOrders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            const data = await res.json();
            return data

        }
    })

    //delete order
    const handelDelete = (id) => {
        fetch(`https://camera-alpha.vercel.app/order/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                toast.success('Delete yor Order')
                refetch()
            })
            .catch(err => console.error(err))
    }

    if (orders.length == 0) {
        return <h1 className='text-error mb-5 text-center'>You have not added Order</h1>
    }

    return (
        <div>
            <h1 className='text-2xl text-primary text-center font-bold my-5'>My Orders</h1>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>

                    </Table.HeadCell>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Payment
                    </Table.HeadCell>
                    <Table.HeadCell>
                        status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {

                        orders &&
                        orders?.map(order => <Table.Row
                            key={order?._id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <img style={{ width: '50px' }} src={order?.img}></img>
                            </Table.Cell>
                            <Table.Cell>
                                {order?.productName}
                            </Table.Cell>
                            <Table.Cell>
                                {order?.resalePrice}
                            </Table.Cell>
                            <Table.Cell>
                                <button className='bg-primary text-white px-3 rounded'>Pay</button>
                            </Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handelDelete(order?._id)} className='text-red-600 font-bold text-2xl'><FaTrashAlt /></button>
                            </Table.Cell>
                        </Table.Row>)

                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyOrders;