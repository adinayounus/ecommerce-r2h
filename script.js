function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

//taking data and putting to json form allowing to read the data 
const response = await fetch('products.json');
const json = await response.json();
console.log(json)

const productGrid = document.getElementById("prod-grid");
// const newReleases = document.getElementById

const prodCard = vinyl => {
    let cardGrid = document.createElement("div");
    cardGrid.classList.add("cardGrid");
    cardGrid.innerHTML = `
        <h1>${vinyl.title}</h1>
    `
    return cardGrid; 
}

json.products.forEach((vinyl) => {
    let card = prodCard(vinyl);
    productGrid.appendChild(card);
})