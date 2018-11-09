let Account = {
    name:'R P',
    expense:0,
    income:0
}

let addIncome = function(Acc,amount){
    Acc.income = Acc.income + amount;
    console.log(Acc.income)
} 

let addExpense = function(Acc,amount){
    Acc.expense = Acc.expense + amount;
    console.log(Acc.expense)
}

let resetAccount = function(Acc){
    
        Acc.name = undefined
        Acc.expense = 0
        Acc.income = 0
    
}

let getAccountSummary = function(Acc){
    let balance = Acc.income - Acc.expense
    console.log(`Account details are: name of account holder: ${Acc.name } \nExpense acquired amount is ${Acc.expense} \nIncome amount is ${Acc.income} \nBalance is account is ${balance}`)
}

addIncome(Account,100)
addIncome(Account,1000)
addExpense(Account,500)
getAccountSummary(Account)
resetAccount(Account)
getAccountSummary(Account)
