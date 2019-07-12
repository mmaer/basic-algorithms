
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const sorted = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }

    const results = [...sorted, ...left, ...right]

    console.log(results)

    return results
}

const array = [10, 3, 5, 7, 3, 2, 4, 6]

mergeSort(array)