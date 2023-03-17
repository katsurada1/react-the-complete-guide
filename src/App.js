import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { title: 'Car Insuarance', amount: 294, date: new Date(2023, 3, 4) },
    { title: 'a', amount: 294, date: new Date(2023, 3, 4) },
    { title: 'b', amount: 294, date: new Date(2023, 3, 4) },

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;