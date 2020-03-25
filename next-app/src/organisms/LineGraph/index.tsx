import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts'

const data = [
    {date: '9:00', concentration: 5.74},
    {date: '10:00', concentration: 19.25},
    {date: '11:00', concentration: 7.91},
    {date: '12:00', concentration: 1.60},
    {date: '13:00', concentration: 3.34},
    {date: '14:00', concentration: 4.28},
    {date: '15:00', concentration: 6.88},
    {date: '16:00', concentration: 5.18},
    {date: '17:00', concentration: 11.50},
]

const LineGraph: React.FC = () => {
    return (
        <React.Fragment>
            <ResponsiveContainer height={400} width='100%'>
                <LineChart data={data}>
                    <Line type='monotone' dataKey='concentration' stroke='#8884d8'/>
                    <CartesianGrid stroke='#ccc'/>
                    <XAxis dataKey='date'/>
                    <YAxis/>
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default LineGraph
