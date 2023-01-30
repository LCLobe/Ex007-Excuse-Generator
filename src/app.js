/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/dog.jpg";
import "./assets/img/bird.jpg";
import "./assets/img/granma.jpg";
import "./assets/img/turtle.jpg";
import "./assets/img/4geeks.ico";

//let whoRandomSelection = 0;
//let imagePath = "";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const theExcuse = document.querySelector("#the-excuse");

  let theExcuseInfo = generateExcuse();
  theExcuse.innerHTML = theExcuseInfo[0];

  let theExcusePicture = imageDisplay(theExcuseInfo[1]);
  document.getElementById("author").src = theExcusePicture;

  //imageDisplay(whoRandomSelection);
  //document.getElementById("author").src = imagePath;
  //document.getElementById("author").src = "./dog.jpg";

  document?.querySelector("#btn")?.addEventListener("click", () => {
    theExcuseInfo = generateExcuse();
    theExcuse.innerHTML = theExcuseInfo[0];
    theExcusePicture = imageDisplay(theExcuseInfo[1]);
    document.getElementById("author").src = theExcusePicture;
    //theExcuse.innerHTML = generateExcuse();
    //location.reload();
  });
  document?.querySelector("#cuerpo")?.addEventListener("click", () => {
    theExcuseInfo = generateExcuse();
    theExcuse.innerHTML = theExcuseInfo[0];
    theExcusePicture = imageDisplay(theExcuseInfo[1]);
    document.getElementById("author").src = theExcusePicture;
    //theExcuse.innerHTML = generateExcuse();
    //location.reload();
  });
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

  //whoRandomSelection = Math.floor(Math.random() * who.length);
  let whoRandomSelection = Math.floor(Math.random() * who.length);
  let actionRandomSelection = Math.floor(Math.random() * action.length);
  let whatRandomSelection = Math.floor(Math.random() * what.length);
  let whenRandomSelection = Math.floor(Math.random() * when.length);

  const result = `${who[whoRandomSelection]} ${action[actionRandomSelection]} ${what[whatRandomSelection]} ${when[whenRandomSelection]}`;
  //return result;
  //const imagePath = imageDisplay(whoRandomSelection);
  //const infoToReturn = [result, imagePath];
  const infoToReturn = [
    result,
    whoRandomSelection,
    actionRandomSelection,
    whatRandomSelection,
    whenRandomSelection
  ];
  return infoToReturn;
}

function imageDisplay(selection) {
  //let selection = "";
  switch (selection) {
    case 0: {
      //imagePath = "./dog.jpg";
      selection = "./dog.jpg";
      break;
    }
    case 1: {
      //imagePath = "./granma.jpg";
      selection = "./granma.jpg";
      break;
    }
    case 2: {
      //imagePath = "./turtle.jpg";
      selection = "./turtle.jpg";
      break;
    }
    case 3: {
      //imagePath = "./bird.jpg";
      selection = "./bird.jpg";
      break;
    }
  }
  return selection;
}
