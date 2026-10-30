let  budgetValue = 0;
let  totalExpensesValue = 0;

let balanceColor = "green"; 

let expenseEntries = [ ["groceries", 33],["restaurants", 50],["transport",12],["home",70],["subscriptions",14],["groceries",28],["subscriptions",12]];
console.log(expenseEntries);

for (let i = 0 ; i < expenseEntries.length; i++)  {
totalExpensesValue = totalExpensesValue + expenseEntries [i][1]
}

function calculateAverageExpense() {
 if (expenseEntries.length === 0 ) {
return 0;
 }
 return (totalExpensesValue / expenseEntries.length); 
}

function calculateBalance() {
return (budgetValue- totalExpensesValue);
}

 function updateBalanceColor() {
 let current = calculateBalance ();
 if (current < 0 ) {balanceColor = "red";}
 else if ( current < budgetValue * 0.25) {balanceColor = "orange";}
 else {balanceColor  = "green";}
 }

 function calculateCategoryExpenses (category){
 let totalExpensesValue = 0;
 for (let i = 0;  i < expenseEntries.length; i++ ){
 if (expenseEntries[i][0] === category) {
 totalExpensesValue += expenseEntries [i][1];
 }
 }
return totalExpensesValue;
 }

 function calculateLargestCategory() {
 let categories = ["groceries","restaurants","transport","home","subscriptions"]
 let categoriesData =[];
 for (let i = 0; i < categories.length; i ++){
 categoriesData.push([categories[i],calculateCategoryExpenses(categories[i])]);
 }
 let gastoalto = 0;
 let mayorgasto = "";
 for (let i = 0;  i < categoriesData.length; i++){
 if (categoriesData[i][1] > gastoalto){
 gastoalto = categoriesData[i][1];
 mayorgasto = categoriesData[i][0];
 }
 return mayorgasto;
}
}

 function addExpenseEntry(newEntry) {
totalExpensesValue = totalExpensesValue + newEntry [1];
 expenseEntries.push(newEntry)
 }