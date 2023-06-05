import React from 'react'
import styles from '../styles/expenses_list.module.css'
const ExpensesList = () => {
  return (
    <div className={styles['expenses-list-container']}>
      <header className={styles['expenses-header-container']}>
        <h4 className={styles.expense}>Expense</h4>
        <h4 className={styles.price}>Price</h4>
        <h4 className={styles.date}>Date</h4>
        <span></span>
      </header>
      <div className={styles['expenses-container']}>
        <ul>
            
        </ul>
      </div>
    </div>
  )
}

export default ExpensesList
