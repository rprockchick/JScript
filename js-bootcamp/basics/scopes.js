let varOne = 'varOne'
if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
}

//console.log(varTwo)

//Global(name)
  //Local
    //Local
  //Local

  //let name = 'Andrew'

  if(true){
      //let name = 'Mike'
      //console.log(name)
      if(true){
         name = 'Apple' //leaked variable
          console.log(name)
      }
  }

  if(true){
      console.log(name)
  }