import React from "react";
import styles from "../styles/budget_and_expenses_form.module.css";






const BudgetAndExpensesForm = () => {
  return (
    <form className={styles["expense-form-container"]}>
      <h3 className={styles['budget-expenses-header']}>Budget & Expenses</h3>
      <div className={styles["budget-container"]}>
        <h5>Budget*</h5>
        <input type="number" placeholder="Enter total budget" />
        <label className={styles["input-error"]}>
          Fill out the budget field!
        </label>
        <button className={styles["add-budget-btn"]}>Add Budget</button>
      </div>
      <div className={styles["expense-container"]}>
        <h5>Expense*</h5>
        <input type="text" placeholder="Enter expense" />
        <label className={styles["input-error"]}>
          Fill out the expense field!
        </label>
        <h5>Price*</h5>
        <input type="number" placeholder="Enter expense's cost" />
        <label className={styles["input-error"]}>
          Fill out the price field!
        </label>
        <h5>Date (Optional)</h5>
        <input type="date" placeholder="Enter expense's date" />
        <button className={styles["add-expense-btn"]}>Add Expense</button>
      </div>
    </form>
  );
};

export default BudgetAndExpensesForm;
