import React, { useState, useEffect } from 'react'

import Chart from '../Chart/Chart'

import DescendingSort from './Function/descendingSort'
import AscendingSort from './Function/ascendingSort'
import TimeDeviation from './Function/calculateTimeDeviation'

const SCAN = ({ dataSet }) => {
    const [
        getFinalDataSet, setFinalDataSet 
    ] = useState([])

    const [
        getTime, setTime
    ] = useState([])

    useEffect(() => {
        let finalDataSet = [...dataSet]
        let timeDeviation = []

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

        timeDeviation.unshift(' ')

        setFinalDataSet(finalDataSet)
        setTime(timeDeviation)
    }, [ dataSet ])

    return (
        <div className="chart__container">
            <Chart dataSet={ getFinalDataSet } title={ "SCAN" } timeDeviation={ getTime }/>
            <style jsx>
                {
                    `
                        .chart__container {
                            width: 100%;
                            max-width: 700px;

                            margin-top: 50px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default SCAN