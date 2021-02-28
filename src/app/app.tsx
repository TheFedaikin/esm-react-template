import React, { useState } from 'react'

import logo from '@assets/logo.svg'

import styles from './app.module.scss'

export default (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt='logo' />
        <p>Hello Snowpack + React!</p>
        <p>
          <button type='button' onClick={() => setCount(newCount => newCount + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>app.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className={styles.link} href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </p>
      </header>
    </div>
  )
}
