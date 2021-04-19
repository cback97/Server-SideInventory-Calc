console.log('JS is good to go')
$(document).ready(onReady);

function onReady() {
    $('#calculateInputs').on('click', objectCalculation)
    $('.operatorButton').on('click', getOperatorString)



}

let operator = '';

function getOperatorString() {
operator = $(this).attr('value')
}


function objectCalculation() {
 let inputCapture = {
     input1: $('#num1').val(),
     operator: operator,
     input2: $('#num2').val(),
     
 }   
 return console.log(inputCapture);


}

//clear input fields
function clearInputs() {
    $('#num1').val('')
    $('#num2').val('')
}

