
function bubbleSort(array) {
    let swapped = false

    do {
        swapped = false
        array.forEach((item, index) => {
            console.log(array)
            if (item > array[index + 1]) {
                const temp = item

                array[index] = array[index + 1]
                array[index + 1] = temp
                swapped = true
            }
        })
    } while (swapped)

    return array
}

const array = [10, 3, 5, 7, 3, 2, 4, 6]

console.log(bubbleSort(array))