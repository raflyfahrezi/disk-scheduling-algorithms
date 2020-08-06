import { useState } from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ dataSet, title, timeDeviation }) => {
    const [
        getOptions, setOptions
    ] = useState({
        title: {
            display: true,
            text: title,
            fontSize: 20
        },
        legend: {
            display: false
        }
    })

    return (
        <Line data={ {
            labels: timeDeviation,
            datasets: [
                {
                    label: 'Track ke ',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: dataSet
                }
            ]
        } } options={ getOptions } />
    )
}

export default Chart