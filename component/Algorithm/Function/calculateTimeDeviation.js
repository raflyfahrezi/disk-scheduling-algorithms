const CalculateTimeDeviation = (array) => {
    const timeDeviation = []

    for (let i = 0; i < array.length - 1; i++) {
        timeDeviation.push("+-" + Math.abs(array[i] - array[i+1]))
    }

    return timeDeviation
}

export default CalculateTimeDeviation