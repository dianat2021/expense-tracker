import React, { Fragment } from 'react'
import styles from '../styles/header.module.css'
import { BiMoneyWithdraw } from 'react-icons/bi';
const Header = () => {
  return (
    <Fragment>
      <h1 className={styles['app-title']}>Expense Tracker <BiMoneyWithdraw/></h1>
    </Fragment>
  )
}

export default Header
