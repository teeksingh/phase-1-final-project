// const init = () => {
//     const inputForm = document.querySelector("form");
  
//     inputForm.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const input = document.querySelector("input#searchByID");
  
//       console.log(input.value);
  function getRandomDrink() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    }
//     });
//   };

// fetch("string representing a URL to a data source")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//    console.log()
//   });
  
//   document.addEventListener("DOMContentLoaded", init);