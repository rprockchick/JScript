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

document.querySelector("button").addEventListener('click',function(e){
    console.log(e)
    e.target.textContent = 'The button was clicked'
})