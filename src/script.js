
  function getRandomDrink() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    }

    const randomButton = document.querySelector('.button')
    randomButton.addEventListener('click', function(){alert('I was clicked')})
