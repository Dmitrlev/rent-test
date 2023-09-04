import styles from './HomePartFooter.module.css';
import oneRight from '../../../assets/icons/HomePartFooter/one.png';
import twoRight from '../../../assets/icons/HomePartFooter/two.png';
import threeRight from '../../../assets/icons/HomePartFooter/three.png';
import fourRight from '../../../assets/icons/HomePartFooter/four.png';

export const HomePartFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles['left-block-images']}>
        <img
          style={{
            maxWidth: '238px',
            width: '100%',
            maxHeight: '201px',
            height: '100%',
          }}
          src={oneRight}
          alt={oneRight}
        />
        <img
          style={{
            maxWidth: '224px',
            width: '100%',
            maxHeight: '132px',
            height: '100%',
            marginLeft: 'auto',
            marginRight: '0'
          }}
          src={twoRight}
          alt={twoRight}
        />
      </div>
      <div className={styles['center-block']}>
        <h2>Register your<br/>properties with us.</h2>
        <p>With best-in-class properties and services that maximizes value<br/>we are putting  best-in-class properties.</p>
        <button>
          <span>Register property with us →</span>
        </button>
      </div>
      <div className={styles['right-block-images']}>
        <img
          style={{
            maxWidth: '164px',
            width: '100%',
            maxHeight: '139px',
            height: '100%',
            marginLeft: '0',
            marginRight: 'auto'
        }}
          src={threeRight}
          alt={threeRight}
        />
        <img
          style={{
            maxWidth: '359px',
            width: '100%',
            maxHeight: '244px',
            height: '100%',
        }}
          src={fourRight}
          alt={fourRight}
        />
      </div>
    </div>
  )
}