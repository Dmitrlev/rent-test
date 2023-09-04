import styles from './AuthButtons.module.css';

export const AuthButtons = () => {
  return (
    <button className={styles.container}>
      <div className={styles.wrapper}>
        <p>Sign In / Sign Up</p>
      </div>
    </button>
  )
}