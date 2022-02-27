const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

// loadSingleUser()

const displayUser = user => {
    console.log(user)
}

// mealDb 

const toggoleSpiner = displayStyle => {
    document.getElementById('spniner').style.display = displayStyle
}
const toggoleSearchResult = displayStyle => {
    document.getElementById('meal').style.display = displayStyle
}

const mealSearch = () => {
    const searchText = document.getElementById('searchField').value

    toggoleSpiner("block")
    toggoleSearchResult('none')
    loadsmeals(searchText)
    document.getElementById('searchField').value = ''

}

const loadsmeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadsmeals('fish')

const displayMeals = meals => {
    console.log(meals);
    const container = document.getElementById('meal')
    container.textContent = ''
    if (!meals) {
        alert('Meals Not Found')
    }
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.innerHTML = `<h1>${meal.strMeal}</h1>
        <button onclick="mealdetails('${meal.strArea}')">Click Me</button>
    
    `
        container.appendChild(div)

    });
    toggoleSpiner('none')
    toggoleSearchResult('block')
}


const mealdetails = mealName => {
    // console.log(mealName)
    const container1 = document.getElementById('aria')
    const div = document.createElement('div')
    div.innerHTML = `
       <p>${mealName}</p>
   
    `
    container1.appendChild(div)

}