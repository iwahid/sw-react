import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userLogout } from '../../api/services/userService/userService';
import { RootState } from '../../store/store';
import logo from "../../assets/imagePlaceHolder/SW-logo_large.png"
import styles from './NavigationBar.module.css'

/** The main way to navigate the app */
export const NavigationBar: React.FC = () => {

  const currentUserEmail = useSelector((state: RootState) => state.user.email)
  const history = useHistory()

  /** Login / logout function */
  const handleClick = () => {
    if (currentUserEmail !== '') {
      userLogout()
      history.push('/sw-react/')
    } else {
      history.push('/sw-react/login')
    }
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationContainer}>

        <div className={styles.navigationSection}>
          <NavLink className={styles.navigationLogo} to="/sw-react/" >
            <img
              alt='Logo'
              src={logo} />
          </NavLink>
        </div>

        <div className={styles.navigationSection}>
          <ul className={styles.navigationNavGroup}>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/sw-react/films"><span>Films</span></NavLink></li>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/sw-react/characters"><span>characters</span></NavLink></li>
            <li ><NavLink activeClassName={styles.selected} className={styles.navigationLink} to="/sw-react/planets"><span>Planets</span></NavLink></li>
          </ul>
        </div>

        <div className={styles.navigationSection}>
          <button className={styles.navigationButton} onClick={handleClick} >{currentUserEmail !== '' ? 'logout' : 'login'}</button>
        </div>
      </div>
    </nav >
  );
}