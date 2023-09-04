import React from "react";
import styles from './Home.module.css';
import {Banner} from "./Banner/Banner"
import {Main} from "./Main/Main";
import {Footer} from "../../components/Footer/Footer";
import {MobileAppAdvertising} from "../../components/MobileAppAdvertising/MobileAppAdvertising";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Main />
      <MobileAppAdvertising />
      <Footer
        homePart={true}
        mobileAppAdvertising={true}
      />
    </div>
  )
}