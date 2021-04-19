console.log('JS is good to go')
$(document).ready(onReady);

function onReady() {
    $('#calculateInputs').on('click', objectCalculation)
    $('.operatorButton').on('click', getOperatorString)



}



function getOperatorString() {
let operator = $(this).attr('value')
console.log(operator);
}


function objectCalculation() {
 let inputCapture = {
     input1: $('#num1').val(),
     operation: $(this).attr('class'),
     input2: $('#num2').val()
 }   
 return console.log(inputCapture);


}

//clear input fields
function clearInputs() {
    $('#num1').val('')
    $('#num2').val('')
}

