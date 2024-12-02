document.getElementById("add-money").addEventListener('click',function(e){
  let addMoneyAmount= document.getElementById("add-money-amount").value;
  const pinNumber= document.getElementById("pin-number").value;
//   console.log(addMoneyAmount,pinNumber);

  if(pinNumber==='123'){
  const currentBalance=document.getElementById("current-balance").innerText;

  // console.log(parseFloat(currentBalance) );
  const addMoney=document.getElementById("add-money-amount").value;

  const addMoneyNumber=parseFloat(addMoney)
  const currentBalanceNumer=parseFloat(currentBalance)
 const newCurrentBalanceValue=addMoneyNumber +currentBalanceNumer;
 document.getElementById("current-balance").innerText=newCurrentBalanceValue
  



  } e.preventDefault()
})