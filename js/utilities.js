// console.log(" utilities loaded");
// function getInputFieldValueById(){
   

// //  const addMoney= document.getElementById("add-money-amount").value;
// //  return addMoney


// }

function  getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue)
    // console.log(id, inputValue,inputNumber);
    return inputNumber
}

function getTextFieldValueById(id){
    const inputText=document.getElementById(id).innerText;
    const textNumber=parseFloat(inputText)
    return textNumber
}

function showAsectionById(id) {
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("cashout-form").classList.add("hidden")
    document.getElementById("transactin-id").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden")
}