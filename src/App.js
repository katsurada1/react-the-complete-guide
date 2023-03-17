import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car Insuarance', amount: 294, date: new Date(2023, 3, 4) },
    { title: 'a', amount: 294, date: new Date(2023, 3, 4) },
    { title: 'b', amount: 294, date: new Date(2023, 3, 4) },

  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;