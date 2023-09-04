import styles from './MobileAppAdvertising.module.css';
import left_icon_mobil from '../../assets/images/MobileAppAdvertising/left.png';
import right_icon_mobil from '../../assets/images/MobileAppAdvertising/right.png';
import googleBTN_icon from '../../assets/images/MobileAppAdvertising/googleBTN.png';
import appleBTN_icon from '../../assets/images/MobileAppAdvertising/appleBTN.png';

export const MobileAppAdvertising = () => {
  return (
    <div className={styles.container}>
      <svg width="100%"  viewBox="0 0 1920 530" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-30 44.7079C19.8333 17.0412 173.893 -25.9173 160.5 74.2079C153.928 123.344 80.3329 115.083 82.3221 64.0827C83.1456 42.9719 91.5 -5.41343 194.5 1.70904C323.174 10.6069 317.5 353.708 448.5 308.708C579.5 263.708 589 182.709 767 408.709C839.333 500.548 1047.5 689.709 1182.5 254.209C1236.08 81.3568 1348 99.208 1451 152.708C1704.55 284.406 1712.5 395.708 1920 356.208" stroke="#E89732"/>
      </svg>
      <div className={styles.wrapper}>
        <div className={styles['left-block']}>
          <img src={left_icon_mobil} alt={left_icon_mobil} />
        </div>
        <div className={styles['center-block']}>
          <h2>Our mobile app</h2>
          <h3>coming soon.</h3>
          <p style={{
            whiteSpace: 'nowrap',
            margin: '30px 0 50px 0',
          }}>
            With best-in-class properties and services that maximizes value we
            <br/>
            are putting  best-in-class properties.
          </p>
          <div className={styles['buttons-block']}>
            <button>
              <img src={googleBTN_icon} alt={googleBTN_icon}/>
            </button>
            <button>
              <img src={appleBTN_icon} alt={appleBTN_icon}/>
            </button>
          </div>
        </div>
        <div className={styles['right-block']}>
          <img src={right_icon_mobil} alt={right_icon_mobil} />
        </div>
      </div>
    </div>
  );
};