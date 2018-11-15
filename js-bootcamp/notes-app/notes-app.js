//DOM - Document Object Model - models our HTML document - document provided to us by browser

//Query first and remove

/*
const p = document.querySelector('p')
console.log(p)
p.remove()
*/

//Query all and remove

const q = document.querySelectorAll('p')
q.forEach(function(item){
    console.log(item.textContent)
    item.textContent = 'I am the Joker'
    //item.remove()
})