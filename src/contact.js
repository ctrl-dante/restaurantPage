

export const ContactPage = () =>{


// const body = document.body;
// body.removeChild(contentDiv);

const contentDiv = document.querySelector("#content")
const nameContact = document.createElement("h1");
nameContact.innerText = "Contact Us";
contentDiv.appendChild(nameContact);

contentDiv.innerHTML = "";

const welcomeParagraphContact = document.createElement("p");
welcomeParagraphContact.innerHTML = "Find Us at:";
contentDiv.appendChild(welcomeParagraphContact);


const bulletListContact = document.createElement("ul");

let bltListContact = "dataStore@mail.here, <br>dataStore@github.there, <br>dataStore@you.hi";
let splitListContact = bltListContact.split(",");

splitListContact.forEach(aTxt => {
    let a = document.createElement("a");
    a.setAttribute("href","http://example.com")
    a.innerHTML = aTxt;
    bulletListContact.appendChild(a);
});

contentDiv.appendChild(bulletListContact);

};