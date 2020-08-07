const GetSumOfNumberFromArray = array => {   
    const newArray = [...array]

    return newArray.reduce((item, nextItem) => {
        return parseInt(item) + parseInt(nextItem)
    }, 0)
}

export default GetSumOfNumberFromArray