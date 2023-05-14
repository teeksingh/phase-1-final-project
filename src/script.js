

  
 function getRandomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const myDrink = data.drinks[0]
      //console.log(myDrink)
      // filterArray(myDrink)
      // console.log(myDrink.strDrink);
      // console.log(myDrink.strDrinkThumb);
      // console.log(myDrink.strInstructions);
      // console.log(myDrink.strIngredient);
     printOutput(myDrink)
    });
}
    function printOutput(myDrink){
      const name = document.getElementById('drinkName').append(myDrink.strDrink)
      const image = document.getElementById('drinkImage').append(myDrink.strDrinkThumb)
      const glassType = document.getElementById('drinkGlassType').append(myDrink.strGlass)
      const measure = document.getElementById('drinkMeasure').append(myDrink.strMeasure)
      const Ingredients = document.getElementById('drinkMeasure').append(myDrink.strIngredient)
      console.log(myDrink)
      const Instructions = document.getElementById('drinkInstructions').append(myDrink.strInstructions)
      // console.log(myDrink)
    }
    

    // const randomButton = document.querySelector('.button')
    // randomButton.addEventListener('click', function(){alert('I was clicked')})