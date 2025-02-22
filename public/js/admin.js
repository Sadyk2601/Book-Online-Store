const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("localhost:7000/admin", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let price = document.querySelector("#price").value;
  let author = document.querySelector("#author").value;
  //   console.log(lastname, name, email);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    title: title,
    author: author,
    price: price,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:7000/admin", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      location.reload();
      console.log(result);
    })
    .catch((error) => console.error(error));
});
