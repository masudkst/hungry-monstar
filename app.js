document.getElementById("input-button").addEventListener("click",function(){
    const inputCount=document.getElementById("input").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputCount}`)
.then(response=> response.json())
.then(data=>{
    displayMealsItems(data.meals)
})
})
const displayMealsItems=recepi=>{
    const mealsContainer= document.getElementById("main-food-container")
    recepi.forEach(receipes => {
        const newDiv=document.createElement('div')
        newDiv.className='recepi-items'
        const recepiInfo=`
        <div class="recepi-image"><img src="${receipes.strMealThumb}"></div>
        <p class="recepi-name">${receipes.strMeal}</p>
        <button onclick="recepiDetails()"> Click Details</button>
        `
        newDiv.innerHTML=recepiInfo;
        mealsContainer.appendChild(newDiv)
    });
}
function recepiDetails(){
    const inputCount=document.getElementById("input").value
    fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputCount}`)
    .then(res=>res.json())
    .then(data=>{
       dispalyRecepi(data.meals)
    })
}
const dispalyRecepi=mealsData=>{
    const mealDetail=document.getElementById("meals-container")
    mealsData.forEach(detailsMeal => {
        const newDiv=document.createElement('div')
        newDiv.className='details'
        mealDetail.innerHTML=`
        <h4>${detailsMeal.strMeal}</h4>
        <p>Ingredients</p>
        <div>
        <h5>${detailsMeal.strIngredient1}</h5>
        <h5>${detailsMeal.strMeasure1}</h5>
        <h5>${detailsMeal.strMeasure2}</h5>
        <h5>${detailsMeal.strMeasure3}</h5>
        </div>
        </div>
        `
        mealDetail.appendChild(newDiv)
    });
}
