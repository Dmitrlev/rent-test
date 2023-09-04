import styles from './MainFooter.module.css';
import {Long} from "../../Common/Long/Long";
import {NavLink} from "react-router-dom";
import {APP_NAME} from "../../../utils/constants";
import apple_icon from '../../../assets/icons/footer/apple.png';
import facebook_icon from '../../../assets/icons/footer/facebook.png';
import gmail_icon from '../../../assets/icons/footer/gmail.png';

export const MainFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles['top-part-wrapper']}>
        <div className={styles['center-blocks']}>
          <NavLink
            to={'/'}
            style={{
              fontSize: '250%',
              color: 'white',
              marginBottom: '25px'
            }}
          >{APP_NAME}</NavLink>
          <p>With best-in-class properties and<br/>services that maximizes value we are<br/>putting best-in-class properties and<br/>services that With best-in-class<br/>properties and services.</p>
        </div>
        <div className={styles['center-blocks']}>
          <h5>Services</h5>
          <p>Rental Property</p>
          <p>Rental Cars</p>
          <p>Tours</p>
        </div>
        <div className={styles['center-blocks']}>
          <h5>Company</h5>
          <p>Lorem</p>
          <p>Facalty</p>
          <p>Options</p>
        </div>
        <div className={styles['center-blocks']}>
          <h5>Contact Us</h5>
          <p>+971-56-227-5555</p>
          <p>example@gmail.com</p>
        </div>
        <div className={styles['network-block']}>
          <a href="/"><img src={facebook_icon} alt={facebook_icon}/></a>
          <a href="/"><img src={gmail_icon} alt={gmail_icon}/></a>
          <a href="/"><img src={apple_icon} alt={apple_icon}/></a>
        </div>
      </div>
      <Long radius={true} color={'rgba(255, 255, 255, 0.59)'} />
      <div className={styles['bottom-part-wrapper']}>
        <NavLink to={'/about-us'}>About Us</NavLink>
        <NavLink to={'/terms-conditions'}>Terms & Condition</NavLink>
        <p style={{marginLeft: 'auto', marginRight: '0'}}>© Rentvip 2023</p>
      </div>
    </div>
  );
};