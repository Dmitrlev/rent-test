import styles from './FormDashboard.module.css';
import {MainButton} from "../../Common/Buttons/MainButton/MainButton";
import 'react-datepicker/dist/react-datepicker.css';
import {FormDashboardDataItem} from "./FormDashboardItem/FormDashboardDataItem";
import {FormDashboardLocationItem} from "./FormDashboardLocationItem/FormDashboardLocationItem";
import {Long} from "../../Common/Long/Long";

export const FormDashboard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.fon}></div>
      <div className={styles.wrapper}>
        <FormDashboardLocationItem
          title={'Location'}
        />
        <Long vertical={true} margin={10}/>
        <FormDashboardDataItem
          actualDate={true}
          title={'Check-in date & Time'}
        />
        <Long vertical={true} margin={10}/>
        <FormDashboardDataItem
          title={'Check-out date & Time'}
        />
      </div>
      <div className={styles.submitBlock}>
        <MainButton
          style={{
            paddingRight: '70px',
            paddingLeft: '70px',
          }}
          styleTitle={{
            fontSize: '120%'
          }}
          animated={false}
          title={'Search'}
        />
      </div>
    </div>
  );
};