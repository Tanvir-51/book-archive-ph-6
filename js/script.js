const searchBook = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  console.log(searchText);

  searchInput.value = "";

  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBookResult(data.docs));
};

const displayBookResult = (books) => {
  const searchResult = document.getElementById("search-result");
  books.forEach((book) => {
    console.log(book);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${
            book.cover_i
          }-M.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name: ${book.title}</h5>
            <p class="card-text">Writer: ${
              book.author_name === undefined
                ? "It's undefined"
                : book.author_name[0]
            }</p>
            <p class="card-text">Publisher: ${
              book.publisher === undefined
                ? "It's undefined"
                : book.publisher[0]
            }</p>
            <p class="card-text">published: ${
              book.first_publish_year === undefined
                ? "It's undefined"
                : book.first_publish_year
            }</p>
          </div>
        </div>
    `;
    searchResult.appendChild(div);
  });
};
