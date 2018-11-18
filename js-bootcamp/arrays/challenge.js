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


console.log(todo)

const deleteTodo = function(todos,todoTitle) {
const index = todos.findIndex( function(todo,index){

    return (todo.title).toLowerCase() === todoTitle.toLowerCase()
    console.log(index)
})
    
if(index > -1){
todo.splice(index,1)
}
}


deleteTodo(todo,'FEED lucky')
console.log(todo)