import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const AllBuyers = () => {

    const {data:allBuyers=[], refetch} = useQuery({
        queryKey: ['buyer'],
        queryFn: async()=>{
            const res = await fetch(`https://camera-alpha.vercel.app/usersRole/${'buyer'}`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })


    //delete Buyer
    const handelDelete =(id) =>{
        fetch(`https://camera-alpha.vercel.app/user/${id}`,{
            method: 'DELETE'
        })
        .then(data => {
            toast.success('Buyer is deleted')
            refetch()
        })
        .catch(err => console.error(err))
    }

    if(allBuyers == 0){
        return <h1 className='text-error mb-5 text-center'>No Buyers Available</h1>
        
    }
    return (
        <div>
            <h1 className='text-2xl text-primary text-center font-bold my-5'>All Buyers</h1>
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
                        allBuyers.map(buyer => <Table.Row 
                        key={buyer?._id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {buyer?.name}
                        </Table.Cell>
                        <Table.Cell>
                            {buyer?.email}
                        </Table.Cell>
                        
                        <Table.Cell>
                        <button onClick={()=>handelDelete(buyer?._id)} className='text-red-600 font-bold text-2xl'><FaTrashAlt /></button>
                            
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