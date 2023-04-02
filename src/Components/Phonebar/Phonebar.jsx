import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from '../Navbar/Link/Link';

const Phonebar = () => {
    const[phones,Setphones]=useState([])
    useEffect(()=>{
       axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       .then(data=>{
        const lodedData=data.data.data
        const phoneData=lodedData.map(phone=>{
            const parts=phone.slug.split('-')
            const price=parseInt(parts[1])
            const phoneInfo={
                name:phone.phone_name,
                price:price
            }
            return phoneInfo;
        })
        Setphones(phoneData)
       })
    },[])
    return (
        <div className='md:w-full'>
           <BarChart width={1000} height={400} data={phones}>
           <Bar dataKey="price" fill="#8884d8" />
           <XAxis dataKey="name"></XAxis>
           <YAxis/>
           <Tooltip/>
           </BarChart> 
        </div>
    );
};

export default Phonebar;