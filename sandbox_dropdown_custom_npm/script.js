import { createDropdownMenu } from "./node_modules/dropdown-menu-touille/dropdown-menu-touille.js"

const btn = document.querySelector("button");
const nav = document.querySelector("nav");

createDropdownMenu("click", null, btn, nav);