
// console.log(" add money loaded");
document.getElementById("add-money-btn").addEventListener('click',function(e){


  e.preventDefault()

const adMoney=getInputFieldValueById("add-money-amount")
const pinNumber=getInputFieldValueById("pin-number")

if(isNaN(adMoney)){
  alert("nunber is not added")
  return 
}

if(pinNumber===123){
const balance = getTextFieldValueById("current-balance")
// console.log(balance);
const newBalance=balance+adMoney;
// console.log(newBalance);
document.getElementById("current-balance").innerText=newBalance

// add to transaction History
const p=document.createElement("p")
p.innerText= `Added amount: ${adMoney}Tk Balance: ${newBalance} `
document.getElementById("tranjection-container").appendChild(p)
console.log(p);
}else{
    alert("wrong way")
}
})
