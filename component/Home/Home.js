import React, { useEffect, useState, Fragment } from 'react'
import Head from 'next/head'

import FIFO from '../Algorithm/FIFO'
import SSTF from '../Algorithm/SSTF'
import CSCAN from '../Algorithm/CSCAN'
import SCAN from '../Algorithm/SCAN'

const Home = () => {
    const [
        getDataSet, setDataSet
    ] = useState([])

    const calculateHandler = () => {
        const track = document.getElementById('track')
        const head = document.getElementById('head')

        const dataSet = track.value.split(' ')
        dataSet.unshift(head.value)

        setDataSet(dataSet)
    }

    useEffect(() => {
        // console.log(getDataSet)
    }, [getDataSet])

    return (
        <div>
            <Head>
                <title>Disk Scheduling Algorithms</title>
            </Head>
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
                    <Fragment/>
                ) : (
                    <Fragment>
                        <FIFO dataSet={ getDataSet } />
                        <SSTF dataSet={ getDataSet } />
                        <SCAN dataSet={ getDataSet }/>
                        <CSCAN dataSet={ getDataSet } />
                    </Fragment>
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
                            width: 100%;
                            max-width: 1200px;

                            display: grid;
                            place-items: center;

                            margin: 100px auto 0 auto;
                        }

                        .chart__content {
                            height: 100%;
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