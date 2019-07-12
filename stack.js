function createStack() {
    const array = []

    return {
        push(item) {
            array.push(item)
        },
        pop() {
            return array.pop()
        },
        peek() {
            return array[array.length - 1]
        },
        get lenght() {
            return array.lenght
        },
        isEmpty() {
            return array.lenght === 0
        }
    }
}

const stack = createStack()

stack.push('underwear')
stack.push('sock')
stack.push('pants')
stack.push('shoes')

stack.pop()
stack.pop()
console.log(stack.lenght)