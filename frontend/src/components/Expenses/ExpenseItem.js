import react, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //function ExpenseItem(props) {}

  //DO NOT USE title = ... ! REACT HANDLES ASSIGNING VALUE WITH setTitle
  // the line above works when clickhandler exist to change title
  //const [title, setTitle] = useState(props.title);
  //title: current state element, setTitle: function for updating title

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
