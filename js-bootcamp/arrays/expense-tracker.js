const account = {
    name: 'James Bond',
    expenses: [],
    incomes: [],
    addIncome: function(description,amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
},
    addExpense: function(description,amount){
            this.expenses.push({
                description: description,
                amount: amount
            })
    },
    getAccountSummary: function(){
        let totalexpense = 0
        let totalIncome = 0

        this.expenses.forEach( function(expense){
            totalexpense = totalexpense + expense.amount
            

        })

        this.incomes.forEach( function(income){
            totalIncome = totalIncome + income.amount
            

        })
        
        return `${this.name} has $${totalIncome - totalexpense} in account. $${totalIncome} in income and $${totalexpense} in expenses`
    }
}

//Expense-> description, amount
//addExpense ->desc, amount
//getAccountSummary ->Total of all expenses





account.addExpense('Martini',350)
account.addExpense('Escort',850)
account.addIncome('Kill 006',5000)
console.log(account.getAccountSummary())
