import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts'

type Props = {
    data: object
}

const LineGraph: React.FC<Props> = ({data}) => {
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
