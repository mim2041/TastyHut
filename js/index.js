const loadMeal = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
    .then(res=> res.json())
    .then(data => displayMeal(data.meals))
}


const displayMeal = (meals) => {
    const mealContainer = document.getElementById('foods-container');
    meals.forEach(meal => {
        mealContainer.innerHTML = `
        
        <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
        `;
    })
}


loadMeal('fish');