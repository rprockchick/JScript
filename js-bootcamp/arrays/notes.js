const notes = ['note1','note2','note3']

let printArray = function(){
    for(let i=0;i<notes.length;i++){
        console.log(`${notes[i]}\n`)
    }

}

console.log(notes.length)
notes.push('get married')
printArray()
notes.pop()
printArray()
notes.shift()
printArray()
notes.unshift('myfirstnote')
notes.unshift('mysecondnote')

printArray()
notes.splice(1,2)
printArray()
notes.splice(0,0,'myfirstitem')
printArray()
printArray()