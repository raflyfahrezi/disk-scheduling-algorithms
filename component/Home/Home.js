import React, { useEffect, useState } from 'react'

import FIFO from '../Algorithm/FIFO'

const Home = () => {
    const [
        getDataSet, setDataSet
    ] = useState([])

    const calculateHandler = () => {
        const track = document.getElementById('track')
        const head = document.getElementById('head')

        const finalValue = track.value.split(' ')
        finalValue.unshift(head.value)

        console.log(finalValue)
        setDataSet(finalValue)
    }

    useEffect(() => {
        console.log('Data Changed')
    }, [getDataSet])

    return (
        <div>
            <div className="header">
                <p className="montserrat title" id="title">Proses Penjadwalan Disk</p>
            </div>
            <div className="card">
                <div className="card__content">
                    <label className="montserrat">Track : </label>
                    <input type="text" placeholder="12 32 44 56 78" id="track"></input>
                </div>
                <div className="card__content">
                    <label className="montserrat">Head : </label>
                    <input type="text" placeholder="100" id="head"></input>
                </div>
                <div className="card__button">
                    <button id="calculate" onClick={ calculateHandler }>Calculate</button>
                </div>
            </div>
            <div className="chart__container">
                { getDataSet.length <= 0 ? (
                    <div></div>
                ) : (
                    <FIFO dataSet={ getDataSet }/>
                ) }
            </div>
            <style jsx>
                {
                    `
                        .header {
                            width: 100%;
                            height: 300px;

                            display: grid;
                            place-items: center;
                        }

                        .card {
                            width: max-content;
                            height: auto;
                            max-width: 1200px;

                            padding: 20px;
                            margin: 0 auto;

                            border: 1px solid rgba(0,0,0,.125);
                        }

                        .card__content {
                            margin-bottom: 20px;
                        }

                        .card__content input {
                            padding: 10px;
                            margin: 0 5px;
                        }

                        .card__button {
                            text-align: center;
                        }

                        .card__button button {
                            padding: 5px 10px;
                        }

                        .chart__container {
                            max-width: 1200px;

                            display: grid;
                            place-items: center;

                            margin: 100px auto 0 auto;
                        }

                        .title {
                            font-size: 30px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Home