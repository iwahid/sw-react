import React from 'react';
import { NavLink } from 'react-router-dom'
import { IAsideLink } from '../../models/sharedInterfaces/asideLink';
import styles from './AsideList.module.css'

/** Props interface */
interface Props {
  linksList: IAsideLink[],
  currentRoute: string,
}

export const AsideList: React.FC<Props> = props => {

  /** List of navigation links */
  const navList = (
    <ul className={styles.nav}>
      {props.linksList.map((link) => (
        <li key={link.id}>
          <NavLink
            activeClassName={styles.selected}
            className={`${styles.linkItem} ${styles.linkTitle}`}
            to={`/${props.currentRoute}/${link.id}`} >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  const loadingMessage = "Loading..."

  return (
    <aside className={styles.wrapper}>
      <div className={styles.container}>
        {
          props.linksList.length
            ? navList
            : loadingMessage
        }
      </div>
    </aside>
  );
}