import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
import React, { useState } from 'react'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle(title + ' -updateValue')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  )
}

//point the event handler no need to add paranthesis,you just point at it.
//if paranthesis are present, js executes its when this line is parse
//this line is parsed when the jsx code is evaluated.

// creating a inline anonymous function in the event handler,
//instead we can define a function before we return either by the
// function keyword or the arrow function

export default ExpenseItem
