
var aStr = "";
var bStr = "";
var operator = "";
var switchVar = false;
var entryLine = "";


function addNumber(num){
  entryLine += num;
  display();

  if (!switchVar){
    aStr += num;
  }else{
    bStr += num;
  }
}

function addOp(op){
  entryLine += ` ${op} `;
  display();
  operator = op;
  switchVar = true;
}

function calc(){
  var result = doCalc();
  console.log(result);
  document.getElementById('out').innerHTML = `= ${result}`;
}

function display(){
  document.getElementById('in').innerHTML = entryLine;
}

function clearDisplay(){
  console.log("hello sir");
  aStr = "";
  bStr = "";
  operator = "";
  switchVar = false;
  entryLine = "";

  document.getElementById('out').innerHTML = "";
  document.getElementById('in').innerHTML = "";
}

function doCalc(){
  switch (operator) {
    case "+":
      return parseInt(aStr) + parseInt(bStr);
    case "-":
      return parseInt(aStr) - parseInt(bStr);
    case "/":
      return parseInt(aStr) / parseInt(bStr);
    case "x":
      return parseInt(aStr) * parseInt(bStr);
  }
}
