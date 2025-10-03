import "./styles.css";
import { helloWorld } from "./helloWorld.js";
import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";
import { ContactPage } from "./contact.js";
//import { useLayoutEffect } from "react";

helloWorld();
//HomePage();fds gg
//MenuPage();
//ContactPage();
//alert("alert Rastafari");


const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click",() => {
   
    HomePage();
   
});

menuBtn.addEventListener("click",() => {
   
    MenuPage();
   
});

aboutBtn.addEventListener("click",() => {
   
    ContactPage();
   
});






































