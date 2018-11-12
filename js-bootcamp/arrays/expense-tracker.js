const account = {
    name: 'James Bond',
    expenses: [],
    addExpense: function(description,amount){
            this.expenses.push({
                description: description,
                amount: amount
            })
    },
    getAccountSummary: function(){
        let totalexpense = 0

        this.expenses.forEach( function(expense){
            totalexpense = totalexpense + expense.amount
            return totalexpense

        })
        
        return `${this.name} has $${totalexpense} in expenses`
    }
}

//Expense-> description, amount
//addExpense ->desc, amount
//getAccountSummary ->Total of all expenses





account.addExpense('Martini',350)
account.addExpense('Escort',850)
console.log(account.getAccountSummary())
