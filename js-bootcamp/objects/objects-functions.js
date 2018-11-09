let myBook = {
    title: 'Sense and Sensibility',
    author: 'Jane Austen',
    pageCount: 350
}

let otherBook = {
    title: 'A tale of 2 cities',
    author: 'Charles Dickens',
    pageCount: 500
}

let getSummary = function(book){

    return{
        summary: `Book ${book.title} by author ${book.author}`,
        pageCountSummary: `Book ${book.title} is ${book.pageCount} pages long`
    } //returning an object with properties summary and pageCountSummary
}

console.log(getSummary(myBook))
console.log(getSummary(otherBook).summary)
console.log(getSummary(otherBook).pageCountSummary)