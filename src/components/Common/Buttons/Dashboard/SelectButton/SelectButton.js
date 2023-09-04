import styles from "./SelectButton.module.css";

export const CustomButton = ({title, icon, active, callback}) => {

  return (
    <button
      onClick={callback}
      className={styles.container}
    >
      <div className={`${styles.fon} ${active && styles['fon-active']}`}></div>
      <div className={`${styles['wrapper-content']} ${active && styles['wrapper-content-active']}`}>
        <img
          className={styles.icon}
          src={icon}
          alt={icon}
        />
        <p className={styles.name}
        >{title}</p>
      </div>
    </button>
  )
}