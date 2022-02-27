const loadData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayData(data.results))
}
loadData()
const displayData = (results) => {
    // console.log(users)
    const container = document.getElementById('gender')
    for (const result of results) {
        console.log(result)
        const div = document.createElement('div')
        div.innerHTML = `<h1>FristName:${result.name.first} LastName:${result.name.last}<br>
        <button onclick="displayEmail('${result.email}')">Click Me </button>
        
        `
        container.appendChild(div)

    }



}
const displayEmail = (emails) => {
    // console.log(email)
    const heading = document.getElementById('Email')
    const p = document.createElement('p')
    p.innerHTML = `${emails}`
    heading.appendChild(p)



}