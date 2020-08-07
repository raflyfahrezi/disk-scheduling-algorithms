import React, { useEffect, useState } from 'react'

import Chart from '../Chart/Chart'

import TimeDeviation from './Function/calculateTimeDeviation'

const FIFO = ({ dataSet }) => {
    const [
        getFinalDataSet, setFinalDataSet
    ] = useState([])

    const [
        getTime, setTime
    ] = useState([])

    useEffect(() => { 
        const finalDataSet = [...dataSet]
        const timeDeviation = TimeDeviation(finalDataSet)
        
        timeDeviation.unshift(' ')
            
        setTime(timeDeviation)
        setFinalDataSet(finalDataSet)
    }, [ dataSet ])

    return (
        <div className="chart__container">
            <Chart dataSet={ getFinalDataSet } title={ "FIFO" } timeDeviation={ getTime }/>
            <style jsx>
                {
                    `
                        .chart__container {
                            width: 100%;
                            max-width: 700px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default FIFO