import Slide from "./Slide.js"

console.log("Executando script!");

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements")
const controls = document.getElementById("slide-controls")

console.log(typeof container);
console.log(typeof elements);
console.log(typeof controls);

if (container && elements && controls) {
  new Slide(container, Array.from(elements.children), controls, 300)
} else {
  console.log("False");
}