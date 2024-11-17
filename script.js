// const hamburger = document.getElementById('hamburger')

// hamburger.addEventListener("click", toggleMenu());
// function toggleMenu() {
//     hamburger.addEventListener("click");
//     hamburger.classList.toggle('open');
// }



//taking data and putting to json form allowing to read the data 
const response = await fetch('products.json');
const json = await response.json();
console.log(json)

const frontGrid = document.getElementById("front-grid");
const sale = document.getElementById("sale")
// const productGrid = document.getElementById("prod-grid");

// const newReleases = document.getElementById

const prodCard = vinyl => {
    let cardGrid = document.createElement("div");
    cardGrid.classList.add("cardGrid");
    cardGrid.innerHTML = `
        <img src="${vinyl.cover}" alt="vinyl cover">
        <h2>${vinyl.title}</h2>
        <h5>${vinyl.artist}</h5>
        <p>${vinyl.price}</p>
        <button>Add to Cart</button>
        
    `
    return cardGrid; 
}

for (let i = 0; i<4; i++){
    let frontCard = prodCard(json.products[i]);
    frontGrid.appendChild(frontCard);
}

for (let i = 4; i<8; i++){
    let frontCard = prodCard(json.products[i]);
    sale.appendChild(frontCard);
}

// json.products.forEach((vinyl) => {
//     let card = prodCard(vinyl);
//     productGrid.appendChild(card);
// })