import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaRegCheckCircle } from 'react-icons/fa';

const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['seller', 'user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/usersRole/${'seller'}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log('alluser---------',allSellers)

    //delete seller
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(data => {
                toast.success('Seller is deleted')
                refetch()
            })
            .catch(err => console.error(err))
    }

    //sellerVerify
    const handelVerify = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT'
        })
            .then(data => {
                toast.success('Seller is verified')
                refetch()
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Seller Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Seller Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        verify
                    </Table.HeadCell>
                    <Table.HeadCell>
                        status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">

                    {
                        allSellers &&
                        allSellers.map(seller => <Table.Row
                            key={seller?._id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {seller?.name}
                            </Table.Cell>
                            <Table.Cell>
                                {seller?.email}
                            </Table.Cell>
                            <Table.Cell>
                                {
                                    seller?.status === 'verify' ?
                                        <button className=' text-2xl rounded text-primary'><FaRegCheckCircle></FaRegCheckCircle></button>
                                        :
                                        <button onClick={() => { handelVerify(seller?._id) }} className='px-3 bg-primary rounded text-white'>Verify</button>
                                }
                            </Table.Cell>

                            <Table.Cell>
                                <button onClick={() => handelDelete(seller?._id)} className='btn btn-sm btn-error'>Delete</button>
                            </Table.Cell>
                        </Table.Row>
                        )
                    }


                </Table.Body>
            </Table>
        </div>
    );
};

export default AllSellers;