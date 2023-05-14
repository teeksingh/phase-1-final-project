document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
// document.getElementById("hover").onmouseover = function (removeResults)

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

    function removeResults(myDrink){
      const name1 = document.getElementById('drinkName')
      name1.remove()

      const image1 = document.createElement("img")
      image1.remove()

      const glassType1 = document.getElementById('drinkGlassType')
      glassType1.remove()

      const measure1 = document.getElementById('drinkMeasure')
      measure1.remove()

      const Ingredients1 = document.getElementById('drinkMeasure')
      Ingredients1.remove()

      const Instructions2 = document.getElementById('drinkInstructions')
      Instructions2.remove()
    }
  