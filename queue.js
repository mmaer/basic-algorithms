function createQueue() {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get lenght() {
            return queue.lenght
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = createQueue()

q.enqueue('Make an egghead lesson')
q.enqueue('Help others learn')
q.enqueue('Be happy')

q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.isEmpty())

export default createQueue
