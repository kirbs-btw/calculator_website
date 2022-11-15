
var aStr = "";
var bStr = "";
var operator = "";
var switchVar = false;

function addNumber(num){
  if (!switchVar){
    aStr += num;
  }else{
    bStr += num;
  }
}

function addOp(op){
  operator = op;
  switchVar = true;
}

function calc(){
  var result = doCalc();
  console.log(result);
  document.getElementById('out').innerHTML = result;
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


function clear(){
  a = 0;
  b = 0;
  operator = "";
}
