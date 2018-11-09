

let getscoreText = function(name,score = 0){
  
  return `Return ${name} ${score}`

   }

getscoreText();
console.log(getscoreText('Andrew',100));


let name = 'Vikram'

console.log(`The name is ${name}`)
//this outputs The name is Jen...substitution takes place in template String
console.log('The name is ${name}')
//this outputs The name is ${name}...substitution does not take place