import React, { useEffect, useState } from 'react'

import Chart from '../Chart/Chart'
import GetHighestValueFromArray from './Function/GetHighestValueFromArray'

const SSTF = ({ dataSet, head }) => {

    useEffect(() => {
        const dataSetTemp = [...dataSet]
        const headTemp = dataSetTemp.shift()
        // const highestValue = GetHighestValueFromArray(dataSet)

        // for (let i = 0; i < dataSetTemp.length; i++) {

        // }
    })

    return (
        <div>

        </div>
    )
}

export default SSTF