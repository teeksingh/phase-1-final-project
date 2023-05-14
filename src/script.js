document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

 function getRandomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const myDrink = data.drinks[0]
     printOutput(myDrink)
    });
}
    function printOutput(myDrink){
      const name = document.getElementById('drinkName').append(myDrink.strDrink)
      const image = document.createElement("img")
      image.src= myDrink.strDrinkThumb
      document.querySelector('#drinkImage').appendChild(image)
      const glassType = document.getElementById('drinkGlassType').append(myDrink.strGlass)
      const measure = document.getElementById('drinkMeasure').append(myDrink.strMeasure1)
          const Ingredients = document.getElementById('drinkMeasure').append(myDrink.strIngredient1)
      const Instructions = document.getElementById('drinkInstructions').append(myDrink.strInstructions)
      console.log(myDrink)
    }