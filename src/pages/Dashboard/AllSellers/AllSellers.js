import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';

const AllSellers = () => {

    const {data:allSellers=[]} = useQuery({
        queryKey: ['allSellers'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/allSellers')
            const data = await res.json()
            return data
        }
    })
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
                        status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                
                    {
                        allSellers &&
                        allSellers.map(seller => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {seller?.name}
                        </Table.Cell>
                        <Table.Cell>
                            {seller?.email}
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

export default AllSellers;