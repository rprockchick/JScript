let todo = ['brush teeth','learn a lot','sleep on time','drink less','smoke less']
console.log(`You have ${todo.length} todo items`)
todo.push('get married')

for(let i=0;i<todo.length;i++){
    console.log(`${todo[i]}\n`)
}




todo.forEach(
    function(itemm,indexmm)
    {
        console.log(`${itemm} is at index ${indexmm}`)
    }
    )

// todo.forEach traverses over the array and to any function we call as part of iteration, can be passed argument item and index
//first arg we pass is the item itself, name does not matter
//second arg is the index and that also is not imp to name as index
//function called to a function is called a callback function

console.log('The item learn a lot exists at '+ todo.indexOf('learn a lot'))