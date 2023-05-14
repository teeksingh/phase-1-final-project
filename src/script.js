

  
 function getRandomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      let myDrink = data.drinks[0]
      // console.log(myDrink)
      filterArray(myDrink)
      // console.log(myDrink.strDrink);
      // console.log(myDrink.strDrinkThumb);
      // console.log(myDrink.strInstructions);
      // console.log(myDrink.strIngredient);
    });
}
    function filterArray(myDrink){
     
    }
    
    // const randomButton = document.querySelector('.button')
    // randomButton.addEventListener('click', function(){alert('I was clicked')})
    git rm --cached phase-1-final-project