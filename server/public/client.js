console.log('JS is good to go')
$(document).ready(onReady);

function onReady() {
    $('#calculateInputs').on('click', objectCalculation)



}


function objectCalculation() {
 let inputCapture = {
     input1: $('#num1').val(),
     input2: $('#num2').val()
 }   
 return console.log(inputCapture);
}

//clear input fields
function clearInputs() {
    $('#num1').val('')
    $('#num2').val('')
}

