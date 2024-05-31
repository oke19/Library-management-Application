const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

// Load books from local storage on page load
window.addEventListener("load", () => {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  renderBooks(books);
});


bookForm.addEventListener('submit', function (event){ 
  event.preventDefault()//prevent the form from autosubmitting

  //collect form data
  const title = document.getElementById('title').value;
     
      console.log(title);
   

  const author = document.getElementById('author').value;
     
      console.log(author);
   
  const description = document.getElementById('description').value;

      console.log(description);

      const pages = document.getElementById('pages').value;
      console.log(pages);

  const isRead = document.getElementById('isRead').value;
      console.log(isRead);

      const book = {title,author,description,pages,isRead};

      let books = JSON.parse(localStorage.getItem('books')) || []
      books.push(book)
      localStorage.setItem('books', JSON.stringify(books));

      renderBooks(books);

      bookForm.reset();
});


//Remove a book
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
      const bookTitle = e.target.parentElement.querySelector("h3").textContent;
      let books = JSON.parse(localStorage.getItem("books")) || [];
      books = books.filter((book) => book.title !== bookTitle);
      localStorage.setItem("books", JSON.stringify(books));
      renderBooks(books);
  }
});

//Render Books
function renderBooks(books) {
  bookList.innerHTML = '';

  books.forEach ((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bg-white', 'dark:bg-black', 'rounded-ig', 'shadow-md', 'p-6', );
    
    const title = document.createElement('h3'); // Define title here
    title.classList.add('text-xl', 'font-bold', 'mb-2', 'text-white', 'dark:text-white','py-2', 'px-4');
    title.textContent = book.title;

    const author = document.createElement('p');
        author.classList.add('text-black', 'dark:text-grey-300', 'mb-2', 'pl-5');
        author.textContent = `Author: ${book.author}`;

    const description = document.createElement('p');
        description.classList.add('text-white', 'dark:text-gray-300', 'mb-2', 'pl-5');
        description.textContent = `Description: ${book.description}`;

    const pages = document.createElement('p');
        pages.classList.add('text-white', 'dark:text-gray-300', 'mb-2', 'pl-5', 'pt-5');
        pages.textContent = `Pages: ${book.pages}`; 

    const isRead = document.createElement("p");
        isRead.classList.add("text-gray-700", "dark:text-gray-300", "mb-2", 'pl-5', 'pt-5');
        isRead.textContent = book.isRead ? "You have read this book" : "You have not read this book";
            
    const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn", "bg-red-500", "hover:bg-red-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "pl-5", 'pt-5');
        removeBtn.textContent = "Remove";

     bookCard.appendChild(title);
     bookCard.appendChild(author);
     bookCard.appendChild(description);
     bookCard.appendChild(pages);
     bookCard.appendChild(isRead);
     bookCard.appendChild(removeBtn);

     bookList.appendChild(bookCard);    
     
    
  });
}
const Toggle3 = document.getElementById('Toggle3')
themeToggleBtn.addEventListener("click", function () {
  // Toggle the icons inside the button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // If set via local storage previously
  if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
      } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
      }
  } else {
      // If not set via local storage previously
      if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
      } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
      }
  }
});



















 


























