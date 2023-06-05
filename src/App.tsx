import styles from "./App.module.css";
import BudgetAndExpensesForm from "./components/BudgetAndExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesSummary from "./components/ExpensesSummary";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles["main-container"]}>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles["expense-summary-container"]}>
        <ExpensesSummary />
      </section>
      <section className={styles["expense-inputs-container"]}>
        <BudgetAndExpensesForm />
      </section>
      <section className={styles["display-expenses-container"]}>
        <ExpensesList />
      </section>
    </div>
  );
}

export default App;
