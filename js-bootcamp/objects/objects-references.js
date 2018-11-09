let myAccount = {
name: 'R P',
expenses: 0,
income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function(account,amount){
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount,2.50) //pass argument by reference i.e. pointer to myAccount is stored in account
console.log(myAccount)