const CalculateTimeDeviation = (array) => {
    const timeDeviationString = []
    const timeDeviationNumber = []

    for (let i = 0; i < array.length - 1; i++) {
        timeDeviationString.push("+-" + Math.abs(array[i] - array[i+1]))
        timeDeviationNumber.push(Math.abs(array[i] - array[i+1]))
    }

    return {
        'timeDeviationString' : timeDeviationString,
        'timeDeviationNumber' : timeDeviationNumber
    }
}

export default CalculateTimeDeviation