function addNums(a, b) {
    //console.log("a", a);
    //console.log("b", b);
    const result = a + b;
    //document.getElementById("result-div").innerHTML = result;
    return result;
  }
  
 // const result1 = addNums(10, 20);
  //document.getElementById("result-div").innerHTML = result1;
  function sum(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    result1 = Number(num1) + Number(num2);
  document.getElementById("result-div").innerHTML = result1;
  }