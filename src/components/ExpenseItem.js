// import "./ExpanseDate";
// import ExpanseDate from "./ExpanseDate";
import Card from './Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {


  return (
    <Card className="div_card">
      {/* <ExpanseDate date={props.date}/> */}
      <div>
        <p className="title">{props.title}</p>
        <div className="amount">{props.amount}</div>
        <p className="text">{props.text}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
