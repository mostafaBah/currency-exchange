let currency1 = document.getElementById('curencys1');
let currency2 = document.getElementById('curencys2');
let textBox = document.querySelector('.textBox');
let output = document.querySelector('.output');
let calcBtn = document.querySelector('.calculateBtn');
let v1 = currency1.value;
let v2 = currency2.value;

document.addEventListener('keydown', () => {
  if(event.key === 'Enter'){
    opperation()
  }
})
calcBtn.addEventListener('click', () => {
  opperation()
})
function calculate(n1){
  let result;
  result = n1 * textBox.value;
  result = Math.round(result*100)/100
  output.innerHTML = result;
}
function opperation(){
  let v1 = currency1.value;
  let v2 = currency2.value;
  if(v1 === 'USD' && v2 === 'USD'){calculate(1)};
  if(v1 === 'USD' && v2 === 'SAR'){calculate(3.75)}
  if(v1 === 'USD' && v2 === 'LBP'){calculate(89000)}
  if(v1 === 'USD' && v2 === 'EURO'){calculate(0.91)}

  if(v1 === 'SAR' && v2 === 'SAR'){calculate(1)}
  if(v1 === 'SAR' && v2 === 'USD'){calculate(0.27)}
  if(v1 === 'SAR' && v2 === 'LBP'){calculate(24000)}
  if(v1 === 'SAR' && v2 === 'EURO'){calculate(0.25)}

  if(v1 === 'LBP' && v2 === 'LBP'){calculate(1)};
  if(v1 === 'LBP' && v2 === 'SAR'){calculate(0.000041)}
  if(v1 === 'LBP' && v2 === 'USD'){calculate(0.000011236)}
  if(v1 === 'LBP' && v2 === 'EURO'){calculate(0.0000102247)}

  if(v1 === 'EURO' && v2 === 'EURO'){calculate(1)}
  if(v1 === 'EURO' && v2 === 'SAR'){calculate(4)}
  if(v1 === 'EURO' && v2 === 'USD'){calculate(1.1)}
  if(v1 === 'EURO' && v2 === 'LBP'){calculate(97900)}
}