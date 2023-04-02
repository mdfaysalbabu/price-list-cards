import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {
          id: 1,
          name: 'John Doe',
          physics: 87,
          chemistry: 91,
          mathematics: 74,
        },
        {
          id: 2,
          name: 'Jane Smith',
          physics: 68,
          chemistry: 82,
          mathematics: 93,
        },
        {
          id: 3,
          name: 'Bob Johnson',
          physics: 79,
          chemistry: 62,
          mathematics: 85,
        },
        // add more students as needed
        {
          id: 8,
          name: 'Samantha Lee',
          physics: 96,
          chemistry: 87,
          mathematics: 93,
        },
        {
          id: 9,
          name: 'Adam Smith',
          physics: 72,
          chemistry: 81,
          mathematics: 66,
        },
        {
          id: 10,
          name: 'Emily Brown',
          physics: 85,
          chemistry: 73,
          mathematics: 89,
        },
        {
          id: 11,
          name: 'Jack Davis',
          physics: 69,
          chemistry: 75,
          mathematics: 82,
        },
        {
          id: 12,
          name: 'Lucy Wilson',
          physics: 91,
          chemistry: 88,
          mathematics: 79,
        },
        {
          id: 13,
          name: 'Tom Jackson',
          physics: 80,
          chemistry: 77,
          mathematics: 83,
        },
        {
          id: 14,
          name: 'Ava Martin',
          physics: 78,
          chemistry: 93,
          mathematics: 71,
        },
      ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}>
                    <Line dataKey="physics"></Line>
                    <Line stroke="#8884d8" dataKey="mathematics"></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Dashboard;