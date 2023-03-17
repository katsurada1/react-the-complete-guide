import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        title={props.expenses[0].title}
      ></ExpenseItem>
      <ExpenseItem
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        title={props.expenses[1].title}
      ></ExpenseItem>
      <ExpenseItem
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        title={props.expenses[2].title}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;