

  
 function getRandomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      let myDrink = data.drinks[0]
      console.log(myDrink)
      // console.log(myDrink.strDrink);
      // console.log(myDrink.strDrinkThumb);
      // console.log(myDrink.strInstructions);
      // console.log(myDrink.strIngredient);
    });

}
          
    
    // const randomButton = document.querySelector('.button')
    // randomButton.addEventListener('click', function(){alert('I was clicked')})
