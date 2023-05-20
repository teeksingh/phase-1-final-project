document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

const baseSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
const randomSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const drinkCardCollection = document.querySelector('#drinkCollection')

const button = document.getElementById("button")
button.addEventListener("click", getRandomDrink)

const hover = document.getElementById("hover")
hover.addEventListener("mouseover", removeResults)

function getRandomDrink() {
  fetch(randomSearchUrl)
    .then((response) => response.json())
    .then((data) => {
      const myDrink = data.drinks[0]
     printOutput(myDrink)
    });
}

function printOutput(myDrink){
      const image = document.createElement("img")
      image.src= myDrink.strDrinkThumb
      document.querySelector('#drinkImage').appendChild(image)

      const name = document.getElementById('drinkName').textContent = myDrink.strDrink

      const glassType = document.getElementById('drinkGlassType').textContent = myDrink.strGlass

      for (const key in myDrink) {
        if (myDrink[key] !== null)
        console.log(myDrink.key)
      }
      const measure = document.getElementById('drinkMeasure').textContent = myDrink.strMeasure1

      const Ingredients = document.getElementById('drinkIngredients').textContent = myDrink.strIngredient1

      const Instructions = document.getElementById('drinkInstructions').textContent = myDrink.strInstructions
      // console.log(myDrink)
    }

  function printOutput2(myDrink)
  {
    
  }
function removeResults(){
      const removeName = document.getElementById('drinkName')
      removeName.textContent = ""

      const removeImage = document.getElementById('drinkImage')
      removeImage.textContent = ""

      const glassType1 = document.getElementById('drinkGlassType')
      glassType1.textContent = ""

      const measure1 = document.getElementById('drinkMeasure')
      measure1.textContent = ""

      const Ingredients1 = document.getElementById('drinkIngredients')
      Ingredients1.textContent = ""

      const Instructions2 = document.getElementById('drinkInstructions')
      Instructions2.textContent = ""

    }
  
function searchByIngredient() {
  const url = baseSearchUrl + '?i=' + userInput
  fetch(url)
  .then ((response) => response.json())
  .then((json) => {
    console.log(json)
  })
}

