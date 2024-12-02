document.getElementById("cash-out-btn").addEventListener("click",function(e){
    e.preventDefault()

    
    // const cashOutAmount=getInputFieldValueById("cashout-amount")
    const pinCode=getInputFieldValueById("pin-code")

if(pinCode===123){

const balance = getTextFieldValueById("current-balance")
const cashoutAmount =getInputFieldValueById("cashout-amount")
const newBalance =balance-cashoutAmount
if(isNaN(cashoutAmount)){
    alert("you are not able to cashout")
    return
}
if(cashoutAmount>balance){
    alert("you are limited to cashout")
    return 
}
document.getElementById("current-balance").innerText=newBalance
// add to transaction id
const div= document.createElement('div')
div.classList.add("bg-yellow-300");
div.innerHTML=` <h4 class="2xl font-bold">Cash Out</h4>
<p>${cashoutAmount} Withdraw. newBalance ${newBalance} Tk</p>

`
document.getElementById("transactin-id").appendChild(div)


}else{
    alert("worng code")
}
    
})