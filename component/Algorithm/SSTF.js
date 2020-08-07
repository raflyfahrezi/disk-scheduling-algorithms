import React, { useEffect, useState } from 'react'

import Chart from '../Chart/Chart'

import AscendingSort from './Function/ascendingSort'
import DescendingSort from './Function/descendingSort'
import TimeDeviation from './Function/calculateTimeDeviation'

const SSTF = ({ dataSet }) => {

    useEffect(() => {
        let finalDataSet = [...dataSet]
        let timeDeviation = []

        const headDataSet = finalDataSet.shift()
        const dataSetBelowHead = []
        const dataSetUpperHead = []

        for (let i = 0; i < finalDataSet.length; i++) {
            if (parseInt(finalDataSet[i]) > parseInt(headDataSet)) {
                dataSetUpperHead.push(finalDataSet[i])
            } else {
                dataSetBelowHead.push(finalDataSet[i])
            }
        }
    })

    return (
        <div>

        </div>
    )
}

export default SSTF