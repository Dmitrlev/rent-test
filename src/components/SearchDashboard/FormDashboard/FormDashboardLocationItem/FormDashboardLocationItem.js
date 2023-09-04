import styles from './FormDashboardLocationItem.module.css';
import locationIcon from "../../../../assets/icons/location.png";

export const FormDashboardLocationItem = ({title = ''}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <img src={locationIcon} alt={locationIcon}/>
        <input
          placeholder={'Введите местоположение'}
          className={styles.input}
          type={'text'}
        />
      </div>
    </div>
  )
}