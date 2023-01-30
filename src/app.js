/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/dog.jpg";
//import "./assets/img/bird.jpg";
import "./assets/img/granma.jpg";
import "./assets/img/turtle.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const theExcuse = document.querySelector("#the-excuse");

  theExcuse.innerHTML = generateExcuse();

  document?.querySelector("#btn")?.addEventListener("click", () => {
    theExcuse.innerHTML = generateExcuse();
  });
  document?.querySelector("#cuerpo")?.addEventListener("click", () => {
    theExcuse.innerHTML = generateExcuse();
  });
  document.getElementById("author").src = imagePath;
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandomSelection = Math.floor(Math.random() * who.length);
  let actionRandomSelection = Math.floor(Math.random() * action.length);
  let whatRandomSelection = Math.floor(Math.random() * what.length);
  let whenRandomSelection = Math.floor(Math.random() * when.length);

  const result = `${who[whoRandomSelection]} ${action[actionRandomSelection]} ${what[whatRandomSelection]} ${when[whenRandomSelection]}`;
  console.log(result);
  return result;
}

function imageDisplay() {
  let imagePath = "";
  switch (whoRandomSelection) {
    case 0: {
      imagePath = "./assets/img/dog.jpg";
      break;
    }
    case 1: {
      imagePath = "./assets/img/dog.jpg";
      break;
    }
    case 2: {
      imagePath = "./assets/img/dog.jpg";
      break;
    }
    case 3: {
      imagePath = "./assets/img/dog.jpg";
      break;
    }
  }
}
