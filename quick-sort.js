
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[0]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i])
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
}

const array = [10, 3, 5, 7, 3, 2, 4, 6]

console.log(quickSort(array));