import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userLogout } from '../../api/services/userService/userService';
import logo from "../../assets/imagePlaceHolder/SW-logo_large.png"
import styles from './NavigationBar.module.css'


export const NavigationBar: React.FC = () => {

  const currentUserEmail = useSelector((state: any) => state.user.email)
  const history = useHistory()

  /** Login / logout function */
  const handleClick = () => {
    if (currentUserEmail !== '') {
      userLogout()
      history.push('/')
    } else {
      history.push('/login')
    }
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationContainer}>

        <div className={styles.navigationSection}>
          <NavLink className={styles.navigationLogo} to="/" >
            <img
              alt='Logo'
              src={logo} />
          </NavLink>
        </div>

        <div className={styles.navigationSection}>
          <ul className={styles.navigationNavGroup}>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/films"><span>Films</span></NavLink></li>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/peoples"><span>Peoples</span></NavLink></li>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/planets"><span>Planets</span></NavLink></li>
          </ul>
        </div>

        <div className={styles.navigationSection}>
          <button className={styles.navigationButton} onClick={handleClick} >{currentUserEmail !== '' ? 'Выйти' : 'Войти'}</button>
        </div>
      </div>
    </nav >
  );
}