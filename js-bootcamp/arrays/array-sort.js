const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
]


const todos = [
    { name: 'buy eggs', completed: true },
    { name: 'buy bread', completed: false },
    { name: 'do homework', completed: true },
    { name: 'meditate', completed: false },
    { name: 'pray', completed: true },
    { name: 'eat', completed: true }
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dates = [1, 2, 3, 31, 23, 21, 12, 9, 8, 5, 6]

console.log(months.sort())
console.log(dates.sort())

const sortitemsbyname = function (items) {
    items.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
        } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1
        } else return 0
    })

}


const sortitemsbyvalue = function (items) {
    items.sort(function (a, b) {
        if (a.value < b.value) {
            return -1
        } else if (b.value < a.value) {
            return 1
        } else return 0
    })

}

    const sortmylist = function (todos) {
        todos.sort(function (a, b) {
            if (!a.completed && b.completed) {
                return -1
            } else if (!b.completed && a.completed) {
                return 1
            } else return 0

        })

    

}

sortitemsbyname(items)
console.log(items)
sortitemsbyvalue(items)
console.log(items)
sortmylist(todos)
console.log(todos)