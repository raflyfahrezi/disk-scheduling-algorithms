import React, { useState, useEffect } from 'react'

import Chart from '../Chart/Chart'

import AscendingSort from './Function/ascendingSort'
import TimeDeviation from './Function/calculateTimeDeviation'
import GetSumOfNumberFromArray from './Function/getSumOfNumberFromArray'

const CSCAN = ({ dataSet }) => {
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
        //inisialisasi variabel sama ngambil data set yang berisi head + track. Head selalu di index ke 0
        let finalDataSet = [...dataSet]
        let timeDeviation = {}
        let averageSeekLength = 0

        //disini inisialisasi juga dan ngambil head dari data set index ke 0 menggunakan fungsi shift
        const headDataSet = finalDataSet.shift()
        const dataSetBelowHead = []
        const dataSetUpperHead = []

        //perulangan disini untuk ngebagi 2 bagian ada array yang diatas nilanya lebih besar dari head 
        //sama array yang dibawah head yang nilainya lebih kecil daripada head
        for (let i = 0; i < finalDataSet.length; i++) {
            if (parseInt(finalDataSet[i]) > parseInt(headDataSet)) {
                dataSetUpperHead.push(finalDataSet[i])
            } else {
                dataSetBelowHead.push(finalDataSet[i])
            }
        }

        //terus susun deh urutannya kalo CSCAN itu dari kecil ke besar
        AscendingSort(dataSetUpperHead)
        AscendingSort(dataSetBelowHead)

        //habis itu gabungin lagi
        finalDataSet = dataSetUpperHead.concat(dataSetBelowHead)

        //masukin head nya
        finalDataSet.unshift(headDataSet)

        //ngitung waktu antara track
        timeDeviation = TimeDeviation(finalDataSet)

        //masukin string kosong biar di label yang pertama gaada nilanya 
        //karena emang head 
        timeDeviation.timeDeviationString.unshift(' ')

        //ngitung rata2 nya
        averageSeekLength = GetSumOfNumberFromArray(timeDeviation.timeDeviationNumber) / timeDeviation.timeDeviationNumber.length

        //masukin ke state nya
        setFinalDataSet(finalDataSet)
        setTime(timeDeviation.timeDeviationString)
        setAverageSeekLength(averageSeekLength.toFixed(1))
    }, [ dataSet ])

    return (
        <div className="chart__container">
            <Chart dataSet={ getFinalDataSet } title={ "CSCAN" } timeDeviation={ getTime }/>
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

export default CSCAN