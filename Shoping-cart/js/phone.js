function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber 
    
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById('phone-total');
  phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId){
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;

}

function calculateSubTotal(){
  //Calculate total
  const currentPhoneTotal = getTextElementValueById('phone-total');
  const currentCaseTotal = getTextElementValueById('case-total');

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  const subTotalElement = document.getElementById('sub-total');
  subTotalElement.innerText = currentSubTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(true);

  updatePhoneTotalPrice(newPhoneNumber);
  calculateSubTotal();
  
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber =
    updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})