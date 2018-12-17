//DOM - Document Object Model - models our HTML document - document provided to us by browser

//Query first and remove

/*
const p = document.querySelector('p')
console.log(p)
p.remove()
*/

const notes = [
    
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
//Query all and remove

/*

const q = document.querySelectorAll('p')
q.forEach(function(item){
    console.log(item.textContent)
    item.textContent = 'I am the Joker'
    
    //item.remove()
})

const newpara = document.createElement('p')
newpara.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newpara)

*/

//attaching a click event listener to a button

document.querySelector("#create-note").addEventListener('click',function(e){
    console.log('element created')
    e.target.textContent = 'The button was clicked'
})

document.getElementById("remove-all").addEventListener('click',function(e){
    removeAllNotes();
})

const removeAllNotes = function(){
    document.querySelectorAll('.otherclass').forEach(function(note){
        //either works document.querySelectorAll('.note').forEach(function(note){
    note.remove();
})}

/*
document.querySelector Targets
Single
-------
p (Target is everything that has a p tag)
#replace (Target everything that has id of replace)
.item (Target everything that has a class of item)

Multiple
----------
p#order (Target paragraph tag which is id="order")
button.inventory (Target buttons that has class="inventory")
h1#title.application (Target h1 that has id="title" and class="application")
h1.application#title (Target h1 that has class="application" and id="title")

*/ 

document.querySelector('#search-text').addEventListener('input',function(e){
    console.log(e.target.value)
})