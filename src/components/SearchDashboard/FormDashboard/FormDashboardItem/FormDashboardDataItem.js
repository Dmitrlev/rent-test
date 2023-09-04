import styles from './FormDashboardDataItem.module.css';
import { useState } from "react";
import bookingIcon from '../../../../assets/icons/booking.png';

export const FormDashboardDataItem = ({ title = '', actualDate = false }) => {

  const initialDate = actualDate ? getCurrentDateString() : ''; // Получение текущей даты
  const [inputDate, setInputDate] = useState(initialDate);

  const handleInputDateChange = (event) => setInputDate(event.target.value);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <img src={bookingIcon} alt={bookingIcon} />
        <input
          style={{
            color: 'black',
            backgroundColor: 'transparent',
            border: 'none',
            width: 'max-content',
            height: '30px',
            fontSize: '110%',
            opacity: 0.8
          }}
          type="date"
          value={inputDate}
          onChange={handleInputDateChange}
        />
      </div>
    </div>
  );
};

// Функция для получения текущей даты в формате YYYY-MM-DD
function getCurrentDateString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}