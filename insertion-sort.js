
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(array)
            if (array[i] < array[j]) {
                const [item] = array.splice(i, 1)
                array.splice(j, 0, item)
            }
        }
    }
    console.log(array)
    return array
}

const array = [10, 3, 5, 7, 3, 2, 4, 6]
insertionSort(array)