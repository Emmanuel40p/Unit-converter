let btn = document.getElementById('submit')
let input = document.getElementById('input')
let resultEl = document.getElementById('resultEl')

let optionCont = document.getElementById('optionEl')

let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')




function convertFeet() {
  let inputNum = input.value;
  console.log(inputNum)
  let times = 30.48;
  let results = inputNum*times
  console.log(results)
  resultEl.innerHTML = results+ 'cm'
  
 input.value=''
}




