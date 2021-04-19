console.log('JS is good to go')
$(document).ready(onReady);

function onReady() {
    $('#calculateInputs').on('click', objectCapture)
    $('.operatorButton').on('click', getOperatorString)



} //end onReady

// Create global variable for operator capture
let operator = '';

function getOperatorString() {
    operator = $(this).attr('value')
} // end getOperatorString

//clear input fields
function clearInputs() {
    $('#num1').val('')
    $('#num2').val('')
} //end clearInputs

function objectCapture() {
    let inputCapture = {
        input1: $('#num1').val(),
        operator: operator,
        input2: $('#num2').val(),

    }

    $.ajax({
            method: 'POST',
            url: '/calculation',
            data: inputCapture // this is goes in the request body
        })
        .then(function (response) {
            console.log('Response from server', response);
            render(response);
            //this is where GET function goes!
        })
        .catch(function (error) {
            console.log('Error from server', error);
            alert('Sorry, could not get calculations. Try again later.');
        })


} //end objectCapture

function getInventory() {
    // ajax method returns back Promise
    $.ajax({
            method: 'GET',
            url: '/calculation',
        })

        .then(function (response) {
            console.log('Response from server', response);
            render(response);
        })
        .catch(function (error) {
            console.log('Error from server', error);
            alert('Sorry, could not get updated stock. Try again later.');
        })
    console.log('After makin server request...');
}

function render(historyArray) {
    $('#history').empty();
    for (let op of historyArray) {
        $('#history').append(`<p>${op.num1} ${op.operator} ${op.num2} = ${op.solve}</p>`)
    }
}

