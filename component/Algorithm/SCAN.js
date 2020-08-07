import React, { useState, useEffect } from 'react'

import Chart from '../Chart/Chart'

import DescendingSort from './Function/descendingSort'
import AscendingSort from './Function/ascendingSort'
import TimeDeviation from './Function/calculateTimeDeviation'
import GetSumOfNumberFromArray from './Function/getSumOfNumberFromArray'

const SCAN = ({ dataSet }) => {
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
        let finalDataSet = [...dataSet]
        let timeDeviation = {}
        let averageSeekLength = 0 

        const headDataSet = finalDataSet.shift()
        const dataSetUpperHead = []
        const dataSetBelowHead = []

        for (let i = 0; i < finalDataSet.length; i++) {
            if (parseInt(finalDataSet[i]) > parseInt(headDataSet)) {
                dataSetUpperHead.push(finalDataSet[i])
            } else {
                dataSetBelowHead.push(finalDataSet[i])
            }
        }

        AscendingSort(dataSetUpperHead)
        DescendingSort(dataSetBelowHead)

        finalDataSet = dataSetUpperHead.concat(dataSetBelowHead)

        finalDataSet.unshift(headDataSet)

        timeDeviation = TimeDeviation(finalDataSet)

        timeDeviation.timeDeviationString.unshift(' ')

        averageSeekLength = GetSumOfNumberFromArray(timeDeviation.timeDeviationNumber) / timeDeviation.timeDeviationNumber.length

        setFinalDataSet(finalDataSet)
        setAverageSeekLength(averageSeekLength.toFixed(1))
        setTime(timeDeviation.timeDeviationString)
    }, [ dataSet ])

    return (
        <div className="chart__container">
            <Chart dataSet={ getFinalDataSet } title={ "SCAN" } timeDeviation={ getTime }/>
            <div className="chart__averageTimeDeviation">
                <p className="montserrat averageTimeDeviation">Average Seek Length : { getAverageSeekLength }</p>
            </div>
            <style jsx>
                {
                    `
                        .chart__container {
                            width: 100%;
                            max-width: 700px;

                            margin-top: 50px;
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

export default SCAN