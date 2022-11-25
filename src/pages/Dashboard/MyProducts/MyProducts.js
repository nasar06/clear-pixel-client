import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: sellerProducts = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            const data = await res.json();
            return data

        }
    })

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
                        sellerProducts.map(sellerProduct => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {sellerProduct?.productName.slice(0, 50) + '...'}
                                {/* {description.slice(0, 100) + '...'} */}
                            </Table.Cell>
                            <Table.Cell>
                            {sellerProduct?.location}
                            </Table.Cell>
                            <Table.Cell>
                            {sellerProduct?.resalePrice}
                            </Table.Cell>
                            <Table.Cell>
                            <button className='px-3 bg-primary text-white rounded'>Sold</button>
                            {/* <button className='px-3 bg-primary text-white rounded'>Available</button> */}
                            </Table.Cell>
                            <Table.Cell>
                                <button className='btn btn-sm btn-error'>Delete</button>
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