let quote = document.querySelector(".quote"); // Corrected the variable name
let kanye = document.querySelector(".kanye");

function getData() {
  kanye.addEventListener("click", () => {
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((data) => {
        quote.innerText = data.quote;
        console.log(data.quote);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
}

getData();
