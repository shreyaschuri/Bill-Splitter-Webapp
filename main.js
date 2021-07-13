class Calculator {
  constructor(tippersonTextElement, totalTextElement) {
    this.tippersonTextElement = tippersonTextElement
    this.totalTextElement = totalTextElement

  }

chooseOperation(number) {
  this.tipperson = number
  this.total = number

}

}

const operationButtons = document.querySelectorAll('[data_add]')

const tippersonTextElement = document.querySelector('[data_tip_amt]')
const totalTextElement = document.querySelector('[data_total]')

const calculator = new Calculator(tippersonTextElement,
totalTextElement)

function calc(tipperson) {
  console.log(parseInt(document.getElementById('custom').value));
  var a = document.querySelector("#Bill").value;
  var b = document.querySelector("#ppl").value;
  var base_contri;
  var total_contri;

  base_contri = a / b;



  if (tipperson != null) {
    total_contri = base_contri * tipperson;


  }else {
    total_contri = base_contri * parseInt(document.getElementById('custom').value) * 0.01;
  }



  console.log(total_contri);

  document.getElementById('tip').innerHTML ='$'+ total_contri.toFixed(2);
  document.getElementById('total').innerHTML = '$'+ (total_contri + base_contri).toFixed(2);

}

document.getElementById("clear").addEventListener("click", clear);

 function clear() {
  document.getElementById("tip").innerHTML = "0.00";
  document.getElementById("total").innerHTML = "0.00";
  document.querySelector("#Bill").value = '';
  document.querySelector("#ppl").value = '';


  console.log("heeyyy")


}


operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerHTML)

  })

});
