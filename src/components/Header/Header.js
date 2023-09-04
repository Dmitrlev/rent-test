import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {APP_NAME} from "../../utils/constants";
import {AuthButtons} from "../Common/Buttons/AuthButtons/AuthButtons";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <NavLink
          to={'/'}
          className={styles['logo-block']}
        >
          <p>{APP_NAME}</p>
        </NavLink>
        <nav className={styles['header-nav-wrapper']}>
          {dataHeaderNav.map((item, index) => (
            <NavLink
              key={index}
              to={item?.to}
            >
              <p>{item?.title}</p>
            </NavLink>
          ))}
        </nav>
        <div className={styles['right-block']}>
         <AuthButtons />
        </div>
      </div>
    </header>
  )
};

const dataHeaderNav = [
  {
    title: 'Home',
    to: '/home',
  },
  {
    title: 'Apartments',
    to: '/apartments',
  },
  {
    title: 'Cars',
    to: '/cars',
  },
  {
    title: 'Tours',
    to: '/tours',
  }
];