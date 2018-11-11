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
}
]


console.log(todo)

const deleteTodo = function(todos,todoTitle) {
const index = todos.findIndex( function(todo,index){

    return (todo.title).toLowerCase() === todoTitle.toLowerCase()
    console.log(index)
})
    
//return todos[index]
todo.splice(index,1)

}


deleteTodo(todo,'FEED lucky')
console.log(todo)