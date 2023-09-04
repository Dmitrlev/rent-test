import {SelectProperty} from "./SelectProperty/SelectProperty";
import {FormDashboard} from "./FormDashboard/FormDashboard";
import styles from './SearchDashboard.module.css';

export const SearchDashboard = () => {

  return (
    <div className={styles.container}>
      <SelectProperty />
      <FormDashboard />
    </div>
  );
};

