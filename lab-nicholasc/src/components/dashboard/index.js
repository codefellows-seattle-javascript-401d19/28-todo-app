import React from 'react';
import ExpenseForm from '../expense-form';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      expenses : [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle') ){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //================================
  // Member functions
  //================================

  handleAddExpense(expense){
    expense.createdOn = new Date();
    expense.id = Math.floor(Math.random() * 1000000);

    this.setState(previousState => {
      return {expenses: [...previousState.expenses, expense]};
    });
  }

  //==================================
  //hooks- React Calls these
  //=================================
  render() {
    let totalPrice = this.state.expenses.reduce((result, expense) => {
      return result + Number(expense.price);
    }, 0);
    return(
      <div className="dashboard">
        <h1> I am the Dashboard </h1>
        <ExpenseForm handleComplete={this.handleAddExpense} />
        <ul>
          {
            this.state.expenses.map((expense, index) =>
              <li key={index}>{expense.title}:${expense.price}</li>)
          }
        </ul>
        <p>The total price is : ${totalPrice}</p>
      </div>
    );
  }
}

export default Dashboard;
