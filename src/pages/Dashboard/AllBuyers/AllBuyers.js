import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';

const AllBuyers = () => {

    const {data:allBuyers=[]} = useQuery({
        queryKey: ['buyer'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/usersRole/${'buyer'}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Buyer Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Buyer Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                
                    {
                        allBuyers &&
                        allBuyers.map(buyer => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {buyer?.name}
                        </Table.Cell>
                        <Table.Cell>
                            {buyer?.email}
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

export default AllBuyers;