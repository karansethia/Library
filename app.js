console.log('This is project 2');
//! For generating random quotes
function randomGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  let n = randomGenerator(1,5);
  console.log(n);
  switch(n){
  case 1:
      document.getElementById('myQuote').innerHTML = `<p class="quote">The library is inhabited by spirits that come out of the pages at night.</p>`
      break;
  case 2:
      document.getElementById('myQuote').innerHTML = `<p class="quote">If you don’t like to read, you haven’t found the right book.</p>`
      break;
  case 3:
      document.getElementById('myQuote').innerHTML = `<p class="quote">A book is a garden, an orchard, a storehouse, a party, a company </p>`
      break;
  case 4:
      document.getElementById('myQuote').innerHTML = `<p class="quote">A great book should leave you with many experiences. You live several lives while reading.</p>`
      break;
  case 5:
      document.getElementById('myQuote').innerHTML = `<p class="quote">Books are not made for furniture, but there is nothing else that so beautifully furnishes a house.</p>`
      break;
  }
  //! Getting book name from user
  document.getElementById('BookName').addEventListener('keyup',getBook);
  function getBook(event){
      if(event.keyCode===13){
        let book = document.getElementById('BookName').value;
        console.log(book);
        return book;
      } 
  }
//   console.log(book);
  // ! Getting JSON file and searching for books
  async function fetchBooks(){
      const response = await fetch('librarybooks.json');
      const Books = await response.json();
      return Books;
  }
let myFunc = fetchBooks();
myFunc.then((Books,book) => {
    Books.forEach(stack => {
        if(stack.Name==book){
            console.log('success');
        }
        else{
            console.log(book);
            console.log('not found');
        }
    });
})