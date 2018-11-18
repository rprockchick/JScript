const todo = [
    {
        title: 'get eggs',
        status: 'complete'
    },
    {
        title: 'get bread',
        status: 'complete'
    },
    {
        title: 'feed lucky',
        status: 'not complete'
    },
    {
        title: 'clean room',
        status: 'complete'
    },
    {
        title: 'water diet',
        status: 'not complete'
    }
    ]


    const filteredArray = todo.filter(function(note,index){
        const isStatusMatch = note.status.includes('complete')
        return isStatusMatch
    })

    const findTodo = function(todo,query){
        return todo.filter(function(note,index){
            const isStatusMatch = note.status.toLowerCase().includes(query.toLowerCase())
            const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
            return isStatusMatch || isTitleMatch
        })

        

    }

    console.log(filteredArray)

    console.log(findTodo(todo,'get'))

    console.log(findTodo(todo,'not complete'))