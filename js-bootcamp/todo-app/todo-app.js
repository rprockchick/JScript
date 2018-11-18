const p = document.querySelectorAll('p');

p.forEach(function(item){
    if(item.innerHTML.toLowerCase().includes('the'))

    //item.textContent can also get the value of the html tag
    
        item.remove();
    
})
