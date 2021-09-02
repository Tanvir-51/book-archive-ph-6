const searchBook = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  console.log(searchText);

  searchInput.value = "";

  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  console.log(url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
};
