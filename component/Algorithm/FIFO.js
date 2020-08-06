import React, { useEffect, useState } from 'react'

import Chart from '../Chart/Chart'

const FIFO = ({ dataSet }) => {
    const [
        getFinalDataSet, setFinalDataSet
    ] = useState([])

    const [
        getTime, setTime
    ] = useState([])

    useEffect(() => { 
        const finalDataSet = dataSet
        const timeDeviation = []

        for (let i = 0; i < finalDataSet.length - 1; i++) {
            timeDeviation.push("Beda " + Math.abs(finalDataSet[i] - finalDataSet[i+1]) + " satuan waktu")
        }

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
                                height: max-content;
                            }
                        `
                    }
                </style>
        </div>
    )
}

export default FIFO