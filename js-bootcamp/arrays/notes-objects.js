//searching in array


const notes = [
{},
{
    title: 'My next trip',
    body: 'Would like to go to France'
},
{
    title: 'Habbits',
    body: 'Stop letting your boss get to you'
},
{
    title: 'Home improve',
    body: 'Bring more green plants'
}
]

console.log(notes.indexOf({}))
console.log(notes.indexOf({
    title: 'Habbits',
    body: 'Stop letting your boss get to you'
}))
//this is -1 because the memory address is stored for objects and not the object itself

console.log({}==={})
console.log(notes[1] === notes[1])


let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)

notes.findIndex(function(note, index){
    console.log(note)
})

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Home improve'
})

//findIndex is efficient as it stops going through array once element is found
console.log(index)