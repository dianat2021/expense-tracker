import React from "react";
import styles from "../styles/expensessummary.module.css";
const ExpensesSummary = () => {
  return (
    <div className={styles["summary-main-container"]}>
      <div className={styles["summary-box"]}>
        <label>Total Budget</label>
        <p>$0</p>
      </div>
      <div className={styles["summary-box"]}>
        <label>Total Expenses</label>
        <p>$0</p>
      </div>
      <div className={styles["summary-box"]}>
        <label>Remaining Budget</label>
        <p>$0</p>
      </div>
    </div>
  );
};

export default ExpensesSummary;
