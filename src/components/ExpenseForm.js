import React, { useState } from 'react'
import NewExpense from './NewExpense'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState('')
  const [enteredAmount, setenteredAmount] = useState('')
  const [enteredDate, setenteredDate] = useState('')

  //one state instead of 3 states, so when we update a state we need
  //to update values for all these 3 variables not just one.

  //   const [userInput, setuserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  const titleChangeHandler = (event) => {
    //react schedules updates, so if we use below approach we might be
    //incorrectly depending on an outdated or incorrect state snapshot

    // setuserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    setenteredTitle(event.target.value)

    //in this approach it is guranteed that react holds the exactly previous state
    //snapshot and updates accordingly

    // setuserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const amountChangeHandler = (event) => {
    // setuserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    setenteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value)
    // setuserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData)
    setenteredTitle('')
    setenteredAmount('')
    setenteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
