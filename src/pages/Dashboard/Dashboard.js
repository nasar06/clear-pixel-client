import { Progress } from 'flowbite-react';
import React from 'react';

const Dashboard = () => {
    
    return (
        <div className='w-8/12 mx-auto'>
            <Progress
                progress={77}
                label="dashboard"
                labelPosition="outside"
                labelProgress={true}
                size="lg"
                color="green"
            />
        </div>
    );
};

export default Dashboard;