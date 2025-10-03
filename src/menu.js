
export const MenuPage = () => { 
//Menu

const contentDiv = document.querySelector("#content")
const nameMenu = document.createElement("h1");
nameMenu.innerText = "Menu";
contentDiv.appendChild(nameMenu);

contentDiv.innerHTML = "";

const welcomeParagraphMenu = document.createElement("h2");
welcomeParagraphMenu.innerHTML = "Hey this is our Menu:";
contentDiv.appendChild(welcomeParagraphMenu);

const bulletListMenu = document.createElement("ul");

let bltListMenu = "sracatella.js,pizza.js,affogato.js,panacota.js,arribata.js,dante.js";
let splitListMenu = bltListMenu.split(",");

splitListMenu.forEach(liTxt => {
    let li = document.createElement("li");
    li.innerHTML = liTxt;
    bulletListMenu.appendChild(li);
});

contentDiv.appendChild(bulletListMenu);

};