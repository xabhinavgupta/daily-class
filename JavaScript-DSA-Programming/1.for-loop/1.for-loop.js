function GetPatterns() {
  let inputElement = (document.getElementById("input").value).toUpperCase();
  if(inputElement.length == 0){
    document.getElementById("output").innerHTML =
    "Input value cannot be null.";
    document.getElementById("output").style.color = "red";
    return;
  }
  document.getElementById("output").style.color = "black";
  //SinputElement.toUpperCase();
  switch (inputElement) {
    case "A":
      patternA();
      break;
    case "B":
      patternB();
      break;
    case "C":
      patternC();
      break;
    case "D":
      patternD();
      break;
    case "E":
      patternE();
      break;
    case "F":
      patternF();
      break;
    case "G":
      patternG();
      break;
    default:
      defaultCase();
  }
}

function defaultCase() {
  document.getElementById("output").innerHTML =
    "Please enter a valid option.";
    document.getElementById("output").style.color = "red";
}

function patternA() {
  let output = "";
  for (let i = 0; i < 11; i++) {
    output += i * 100 + " ";
  }
  document.getElementById("output").innerHTML = output;
}

function patternB() {
  let output = "";
  for (let i = 0; i < 8; i++) {
    output += Math.pow(2, i) + " ";
  }
  document.getElementById("output").innerHTML = output;
}

function patternC() {
  let output = "";
  for (let i = 0; i < 8; i++) {
    output += i * 2 + " ";
  }
  document.getElementById("output").innerHTML = output;
}

function patternD() {
  let output = "";
  for (let i = 1; i <= 6; i++) {
    output += i * 3 + " ";
  }
  document.getElementById("output").innerHTML = output;
}

function patternE() {
  let output = "";
  for (let i = 9; i >= 0; i--) {
    output += i + " ";
  }
  document.getElementById("output").innerHTML = output;
}

function patternF() {
  let output = "";
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      output += i + " ";
    }
  }
  document.getElementById("output").innerHTML = output;
}

function patternG() {
  let output = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      output += j + " ";
    }
  }
  document.getElementById("output").innerHTML = output;
}
