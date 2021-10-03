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
  document.getElementById('BookName').addEventListener('keyup',getName);
  
  function getName(event){
      if(event.keyCode === 13){
    getBook();}
}
//   console.log(book);
  // ! Getting JSON file and searching for books
  function getBook(){
    let book = document.getElementById('BookName').value;
      fetch('librarybooks.json')
      .then(res => res.json())
      .then((Books) => {
          Books.forEach(stack => {
              switch(stack["Name"] === book){
                case true:
                    console.log("success");
            console.log(book);
            document.getElementById('search-result').innerHTML= `<div id="result">
            <div id="bookInfo">
            <ul>
                <li><h3>NAME: ${stack["Name"]}</h3></li>
                <li><h3>GENRE: ${stack["Genre"]}</h3></li>
                <li><h3>RATING: ${stack["Rating"]}</h3></li>
            </ul>
        </div>
        <div id="bookImg">
        <img src="${stack["Book Cover"]}" height="150px" width="100px">
        </div>
        </div>`
        break;
        case false:
        return n = 0;   
              }
          });
          console.log(n);
        //   if(n === 0){
        //       console.log("not found");
        //       document.getElementById('search-result').innerHTML=`<div id="result" class="result">
        //       <h2>Sorry</h2>
        //       <p>The Book you've been looking for is not found</p>
        //       </div>`;
        //   };
      })
  }
  