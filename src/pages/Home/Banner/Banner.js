import {useAnimationOnLoad} from "../../../hooks/useAnimationOnLoad";
import styles from "./Banner.module.css";
import {SearchDashboard} from "../../../components/SearchDashboard/SearchDashboard";
import React, {useEffect, useState} from "react";
import {Header} from "../../../components/Header/Header";
import MainBannerPropertyIcon from '../../../assets/images/MainBannerProperty.png';
import MainBannerToursIcon from '../../../assets/images/MainBannerTours.png';
import MainBannerCarRentalIcon from '../../../assets/images/MainBannerCarRental.png';
import {useSelector} from "react-redux";

export const Banner = () => {

  const {currentBannerState} = useSelector(state => state.selectTest);

  const [backgroundImage, setBackgroundImage] = useState(renderImage(currentBannerState));

  useEffect(() => {
    setBackgroundImage(renderImage(currentBannerState));
  }, [currentBannerState]);

  const isAnimatedTitle = useAnimationOnLoad(50);
  const isAnimatedDashboard = useAnimationOnLoad(300);

  return (
    <div className={styles.container}>
      <div
        className={styles.fon}
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className={styles.bannerOverlay}></div>
        <div className={styles.boxShadow}></div>
      </div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles['banner-wrapper-title']}>
          <div className={`${styles['banner-block-title']} ${isAnimatedTitle && styles['banner-block-title-set-top']}`}>
            <h1>Hospitality<br/>and aesthetics</h1>
            <p>Contrary to popular belief, of classical Latin literature from 45 BC, making.</p>
          </div>
        </div>
        <div className={styles['dashboard-wrapper']}>
          <div className={`${styles['dashboard-block']} ${isAnimatedDashboard && styles['dashboard-block-set-top']}`}>
            <SearchDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

const renderImage = (name) => {
  switch (name) {
    case 'Property':
      return MainBannerPropertyIcon;
    case 'Tours':
      return MainBannerToursIcon;
    case 'CarRental':
      return MainBannerCarRentalIcon;
    default: return MainBannerPropertyIcon;
  }
}