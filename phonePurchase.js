const taxRate = 0.08;
const phonePrice = 99.99;
const accPrice = 5.47;
let maxSpend = 0;
let accountBalance;
let toContinue = true;
let totalCost = phonePrice + accPrice;
let numPhonesAcc = {
  phones: 0,
  acc: 0,
  totalCost: 0
}

const getAccountBalance = () => {
    accountBalance = prompt("How much money is in your bank account right now?");
    accountBalance = Number(accountBalance);

    if (Number.isNaN(accountBalance)) {
      alert("Please enter your account balance as a number!");
    } else {
      return accountBalance;
    }
}

const getMaxSpend = () => {
    maxSpend = prompt("How much are you willing to spend on any one (1) phone + accessories?");
    maxSpend = Number(maxSpend);

    if (Number.isNaN(maxSpend)) {
      alert("Please enter a number!");
    } else {
      if (maxSpend > accountBalance) {
        alert("You can't plan to spend more than you have!");
        toContinue = false;
      }
    }
}

const calcNumberOfPhonesAndAcc = () => {
  if (totalCost > maxSpend) {
    console.log("That's more than you want to spend for one (1) phone & one (1) accessory. Sorry!")
  } else {
    while (numPhonesAcc.totalCost + phonePrice + accPrice <= accountBalance) {
      numPhonesAcc.totalCost = numPhonesAcc.totalCost + phonePrice + accPrice;
      numPhonesAcc.phones++;
      numPhonesAcc.acc++;
      console.log(numPhonesAcc.totalCost);
    }
    while (numPhonesAcc.totalCost + accPrice <= accountBalance) {
      numPhonesAcc.totalCost = numPhonesAcc.totalCost + accPrice;
      numPhonesAcc.acc++;
      console.log(numPhonesAcc.totalCost);
    }
  }
  totalCost = numPhonesAcc.totalCost;
}

const calcTax = () => {
  totalCost = totalCost + (totalCost * taxRate);
}

const displayPurchase = () => {
  if (toContinue) {
    alert(`You only want to spend $${(maxSpend).toFixed(2)} out of $${(accountBalance).toFixed(2)} you have available. So, you can purchase ${numPhonesAcc.phones} phones at $99.99 each & ${numPhonesAcc.acc} accessories at $5.47 each for a total cost of $${totalCost.toFixed(2)}. You will have $${(accountBalance - totalCost).toFixed(2)} left.`)
  } else {
    alert(`You need to be willing to spend more of your money to buy this phone! Go get a job!`);
  }

}

accountBalance = getAccountBalance();
getMaxSpend();
calcNumberOfPhonesAndAcc();
displayPurchase();
