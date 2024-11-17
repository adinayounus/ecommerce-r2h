const response = await fetch('products.json');
const json = await response.json();
console.log(json)

const productGrid = document.getElementById("prod-grid");
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

json.products.forEach((vinyl) => {
    let card = prodCard(vinyl);
    productGrid.appendChild(card);
})

// for (let i = 0; i<4; i++){
//     let card = prodCard(json.products[i]);
//     productGrid.appendChild(card);
// }