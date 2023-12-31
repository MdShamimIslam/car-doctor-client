import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-12'>
            <h3 className='text-4xl font-bold text-center'>Our Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;