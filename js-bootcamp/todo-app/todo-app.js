const todo = [
    {
        title: 'get eggs',
        completed: false
    },
    {
        title: 'get bread',
        completed: true
    },
    {
        title: 'feed lucky',
        completed: true
    },
    {
        title: 'clean room',
        completed: false
    },
    {
        title: 'water diet',
        completed: false
    },
    {
        title: 'not eat',
        completed: true
    },
    {
        title: 'detox',
        completed: true
    },
    {
        title: 'reboot your body',
        completed: true
    }
    ]
    
//code to remove all the paragraph elements containing 'the'
/*
const p = document.querySelectorAll('p');

p.forEach(function(item){
    if(item.innerHTML.toLowerCase().includes('the'))

    //item.textContent can also get the value of the html tag
    
        item.remove();
    
})

*/

<<<<<<< HEAD

=======
/*
>>>>>>> 6c8a81f206168730d5afd0079c7581684e79b731

const showToDoLeft = function(todo){
    let count = 0
    todo.forEach(function(item){
        console.log(item.completed)
        if(item.completed === false)
        count++
      
})

return count;

}

const addtodolist = function(todo){
    
    todo.forEach(function(item){
        let iscomplete = ''
        if(item.completed === false)
        iscomplete = 'Not complete'
        else iscomplete = 'Complete'
        const addp = document.createElement('p')
        document.querySelector('body').appendChild(addp)
        addp.textContent = `${item.title}: ${iscomplete}`

      
})

}

//way 2

const incompleteTodos = todo.filter(function(todo){
    return !todo.completed
})


const newp = document.createElement('h3')
newp.textContent = `You have ${showToDoLeft(todo)} todos left to be completed.`
newp.textContent = `You have ${incompleteTodos.length} todos left to be completed!`
document.querySelector('body').appendChild(newp)
addtodolist(todo)

<<<<<<< HEAD
=======
*/
>>>>>>> 6c8a81f206168730d5afd0079c7581684e79b731


document.querySelector('button').addEventListener('click',function(e){
    console.log('todo added')
})