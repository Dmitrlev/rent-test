import styles from './Footer.module.css';
import {HomePartFooter} from "./HomePartFooter/HomePartFooter";
import {MainFooter} from "./MainFooter/MainFooter";
import {Long} from "../Common/Long/Long";

export const Footer = ({
  homePart = false,
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {homePart && (
          <>
            <HomePartFooter />
            <Long radius={true} color={'rgba(255, 255, 255, 0.59)'} />
          </>
        )}
        <MainFooter />
      </div>
    </div>
  );
};