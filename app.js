let errorMsg = document.getElementById('errorMessage');

//------------- handle search button-----------
const mealContainer = document.getElementById('mealCard');
const searchFood = () => {
    const searchField = document.getElementById('mealInput');
    const searchData = searchField.value;
    if (!searchData) {
        mealContainer.textContent = '';
        errorMsg.innerHTML = 'তুমি কিছু লিখো নাই 🙄';
        return;
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals))
    searchField.value = '';
}

const displayMealInfo = mealData => {
    // console.log(mealData);
    if (!mealData) {
        mealContainer.textContent = '';
        errorMsg.innerHTML = 'আজাইরা খোঁজা-খুঁজি বাদ দিয়া ঘুমাও 😐';
        return;
    }
    errorMsg.innerHTML = '';
    mealContainer.textContent = '';
    mealData.forEach(item => {
        const foodItemName = document.createElement('div');
        foodItemName.className = 'meal-items';
        itemPosition = item.idMeal;
        const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `
        foodItemName.innerHTML = mealInformation;
        foodItemName.addEventListener('click', function () {
            mealIngredientsInfo(item.idMeal);
        });
        mealContainer.appendChild(foodItemName);
    });
}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals))
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    console.log(mealItemDetails)
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    mealItemsInformation.innerHTML = '';
    mealItemDetails.forEach(items => {
        console.log(items);
        const mealItemsInformations = document.getElementById('mealItemsInfo');
        mealItemsInformations.className = 'ingredients-info';
        console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const li = `
        ${items.strIngredient1 ? `<li>${items.strIngredient1}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient2 ? `<li>${items.strIngredient2}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient3 ? `<li>${items.strIngredient3}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient4 ? `<li>${items.strIngredient4}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient5 ? `<li>${items.strIngredient5}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient6 ? `<li>${items.strIngredient6}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient7 ? `<li>${items.strIngredient7}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient8 ? `<li>${items.strIngredient8}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient9 ? `<li>${items.strIngredient9}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient10 ? `<li>${items.strIngredient10}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient11 ? `<li>${items.strIngredient11}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient12 ? `<li>${items.strIngredient12}</li>` : `<li class="d-none">No data found</li>`}
         ${items.strIngredient13 ? `<li>${items.strIngredient13}</li>` : `<li class="d-none">No data found</li>`}
        `
        ul.innerHTML = li;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);


    });

}


