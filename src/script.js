document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded")
  grabButtons()
});

const baseSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'
const randomSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const drinkCardCollection = document.querySelector('#drinkCollection')

const getDrinks = (childNode) => {
  const url = baseSearchUrl + '?i=' + childNode.id
    fetch(url)
    .then(res => res.json())
    .then(hash => hash['drinks'].forEach(drink => renderDrink(drink))) 
};
const renderDrink = (drink) => {
  const drinkCard = document.createElement('div')
  drinkCard.className = "card"

  const drinkName = document.createElement('h2')
  drinkName.innerText = drink.strDrink

  const drinkImage = document.createElement('img')
  drinkImage.src = drink.strDrinkThumb
  drinkImage.className = "drink-image"


  drinkCard.append(drinkName, drinkImage)

  drinkCollection.append(drinkCard)

};
const grabButtons = () => {
  document.querySelector('#pop-buttons').childNodes.forEach(childNode => { 
      childNode.addEventListener('click', function(){
          removeDrinks()
          getDrinks(childNode)
      })
  })
};

const removeDrinks = () => {
  drinkCollection.textContent = ""
  while (drinkCollection.firstChild) {
    drinkCollection.removeChild(drinkCollection.lastChild);
  }
}



const button = document.getElementById("button")
button.addEventListener("click", getRandomDrink)

const hover = document.getElementById("hover")
hover.addEventListener("mouseover", removeResults)

function getRandomDrink() {
  fetch(randomSearchUrl)
    .then((response) => response.json())
    .then((data) => {
      const myDrink = data.drinks[0]
     removeResults()
      printOutput(myDrink)
    
    });
}


function printOutput(myDrink){
      const image = document.createElement("img")
      image.src= myDrink.strDrinkThumb
      document.querySelector('#drinkImage').appendChild(image)
      const name = document.getElementById('drinkName').textContent = myDrink.strDrink
      const glassType = document.getElementById('drinkGlassType').textContent = myDrink.strGlass
      const measure = document.getElementById('drinkMeasure').textContent = myDrink.strMeasure1 + myDrink.strIngredient1
      const Ingredients = document.getElementById('drinkIngredients').textContent = myDrink.strMeasure2 + myDrink.strIngredient2 + myDrink.strMeasure3 + myDrink.strIngredient3
      const Instructions = document.getElementById('drinkInstructions').textContent = myDrink.strInstructions
      // console.log(myDrink)
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