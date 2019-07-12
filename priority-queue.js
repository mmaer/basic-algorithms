import createQueue from './queue'

function createPriorityQueue() {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        enqueue(item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        dequeue() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }
            return lowPriorityQueue.dequeue()
        },
        peek() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }
            return lowPriorityQueue.peek()
        },
        lenght() {
            return highPriorityQueue.lenght + lowPriorityQueue.length
        },
        isEmpty() {
            return (
                highPriorityQueue.isEmpty() &&
                lowPriorityQueue.isEmpty()
            )
        }
    }
}

const pq = createPriorityQueue()

pq.enqueue('A fix here')
pq.enqueue('A bug here')
pq.enqueue('A new feature here')

q.dequeue()
q.enqueue('Emegrency task', true)
q.dequeue()
console.log(q.peek())