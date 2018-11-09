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
console.log(`Book ${book.title} by author ${book.author}`)

}

getSummary(myBook)
getSummary(otherBook)