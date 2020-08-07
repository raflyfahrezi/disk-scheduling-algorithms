import React, { useEffect, useState } from 'react'

import Chart from '../Chart/Chart'

import TimeDeviation from './Function/calculateTimeDeviation'
import GetSumOfNumberFromArray from './Function/getSumOfNumberFromArray'

const FIFO = ({ dataSet }) => {
    const [
        getFinalDataSet, setFinalDataSet
    ] = useState([])

    const [
        getTime, setTime
    ] = useState([])

    const [
        getAverageSeekLength, setAverageSeekLength
    ] = useState(0)

    useEffect(() => { 
        const finalDataSet = [...dataSet]
        const timeDeviation = TimeDeviation(finalDataSet)

        let averageSeekLength = 0
        
        timeDeviation.timeDeviationString.unshift(' ')
            
        averageSeekLength = GetSumOfNumberFromArray(timeDeviation.timeDeviationNumber) / timeDeviation.timeDeviationNumber.length

        setTime(timeDeviation.timeDeviationString)
        setAverageSeekLength(averageSeekLength.toFixed(1))
        setFinalDataSet(finalDataSet)
    }, [ dataSet ])

    return (
        <div className="chart__container">
            <Chart dataSet={ getFinalDataSet } title={ "FIFO" } timeDeviation={ getTime }/>
            <div className="chart__averageTimeDeviation">
                <p className="montserrat averageTimeDeviation">Average Seek Length : { getAverageSeekLength }</p>
            </div>
            <style jsx>
                {
                    `
                        .chart__container {
                            width: 100%;
                            max-width: 700px;
                        }

                        .averageTimeDeviation {
                            margin-top: 5px;
                            text-align: center
                        }
                    `
                }
            </style>
        </div>
    )
}

export default FIFO