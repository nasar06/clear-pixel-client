import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: orders = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders?email=${user?.email}`)
            const data = await res.json();
            return data

        }
    })
    console.log('orders--------', orders)

    return (
        <div>
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
                        orders?.map(order => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <img style={{width: '50px'}} src={order?.img}></img>
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
                                <button className='btn btn-sm btn-error'>Delete</button>
                            </Table.Cell>
                        </Table.Row>)
                        
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyOrders;