import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userLogout } from '../../api/services/userService/userService';
import { RootState } from '../../store/store';
import { Button } from '../UIComponents/Button/Button';
import styles from './NavigationBar.module.scss'
import LOGO_FULL from "../../assets/imagePlaceHolder/SW-logo_full.png"
import LOGO_SHORT from "../../assets/imagePlaceHolder/SW-logo_short.png"

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
      <div className={styles.navigation__container}>

        <div className={styles.navigation__section}>
          <NavLink className={styles.navigation__logo} to="/sw-react/" >
            {/* <img alt='Logo' src={LOGO_FULL} /> */}
          </NavLink>
        </div>

        <div className={styles.navigation__section}>
          <ul className={styles.navigation__linkGroup}>
            <li ><NavLink activeClassName={styles.navigation__link_selected} className={styles.navigation__link} to="/sw-react/films"><span>Films</span></NavLink></li>
            <li ><NavLink activeClassName={styles.navigation__link_selected} className={styles.navigation__link} to="/sw-react/characters"><span>characters</span></NavLink></li>
            <li ><NavLink activeClassName={styles.navigation__link_selected} className={styles.navigation__link} to="/sw-react/planets"><span>Planets</span></NavLink></li>
          </ul>
        </div>

        <div className={styles.navigation__section}>
          <Button onClick={handleClick} title={currentUserEmail !== '' ? 'logout' : 'login'} />
        </div>
      </div>
    </nav >
  );
}