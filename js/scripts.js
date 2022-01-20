function divide (num1, num2){
  return num1 / num2;
}

const num1 = Number(prompt("enter a number"))
const num2= Number(prompt("enter a second number"));

const result = (divide(num1, num2));
alert(result);

function convert(temp1) {
  return ((temp1*(9/5) + 32));
}
const temp1 = Number(prompt("What is the temp is celsius"))

const fTemp = convert(temp1);

alert(fTemp);
