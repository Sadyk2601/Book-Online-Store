// const { readBooks } = require("../../services/books.service");
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("localhost:7000/api/v1/books", requestOptions)
  .then((response) => response.text())
  .then((result) => {})
  .catch((error) => console.error(error));

let btns = document.querySelectorAll(".delete");
let upbtns = document.querySelectorAll(".update");

for (let button of [...btns]) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let id = button.getAttribute("id");
    // console.log(id);
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:7000/api/v1/books/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => console.error(error));
  });
}

let title = document.querySelector("#title");
let price = document.querySelector("#price");
let author = document.querySelector("#author");

for (let i of [...upbtns]) {
  i.addEventListener("click", (event) => {
    event.preventDefault();
    let id = i.getAttribute("id");
    console.log(id);
    {
      fetch(`http://localhost:7000/api/v1/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title.value,
          author: author.value,
          price: price.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((response) => {
          location.reload();
        });
    }
  });
}
