/*
1. Add event listener to the case plus button
2. Get the value inside the case number field.
3. Convert the number to an integer.
4. Calculate the new case number.
5. Set the value the case number field
*/



function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('button-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('button-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateTotalPrice(newCaseNumber);
    calculateSubTotal();
})



