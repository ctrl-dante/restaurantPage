//HOME
export const HomePage = () =>{


const body  = document.body;
const div = document.createElement("div");
const contentDiv = document.querySelector("#content")

contentDiv.innerHTML = "";

const name = document.createElement("h1");
name.innerText = "Data Store!";
contentDiv.appendChild(name);
const welcomeParagraph = document.createElement("p");
welcomeParagraph.innerHTML = "Welcome to <b>DataStore</b>, your hub for data science solutions, tools, and resources From machine learning models to visualization dashboards, we provide everything you need to turn raw data into actionable insights.Explore our curated collection of datasets, templates, and tutorials designed for beginners, professionals, and businesses alike.";
contentDiv.appendChild(welcomeParagraph);

const secondParagraph = document.createElement("p");
secondParagraph.innerHTML = "Whether you’re:";

contentDiv.appendChild(secondParagraph);

const bulletList = document.createElement("ul");

let bltList = "A student starting your journey in analytics,A researcher looking for reliable data resources,Or a business professional searching for insights";
let splitList = bltList.split(",");

splitList.forEach(liTxt => {
    let li = document.createElement("li");
    li.innerHTML = liTxt;
    bulletList.appendChild(li);
});

contentDiv.appendChild(bulletList);

const thirdParagraph = document.createElement("p");
thirdParagraph.innerHTML = "Our store is built for simplicity and usability. Browse, explore, and find resources that save you time and unlock new opportunities. From machine learning frameworks to visualization dashboards, everything here is designed to help you turn data into value.";

contentDiv.appendChild(thirdParagraph);

};