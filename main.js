import { data } from "./data.js";

const source = document.getElementById("etsy-card-template").innerHTML;
const template = Handlebars.compile(source);
const html = template(data);
document
   .getElementById("etsy-recreation")
   .insertAdjacentHTML("afterbegin", html);
