import React from 'react';
import { NavLink } from 'react-router-dom'
import { IAsideLink } from '../../models/sharedInterfaces/asideLink';
import styles from './AsideList.module.css'

/** Props interface */
interface Props {
  linksList: IAsideLink[],
  currentRoute: string,
}

/** List for navigation, within a specific section/page. 
 * Contains a complete list of all page data */
export const AsideList: React.FC<Props> = ({ linksList, currentRoute }) => {

  /** List of navigation links */
  const navList = (
    <ul className={styles.nav}>
      {linksList.map((link) => (
        <li key={link.id}>
          <NavLink
            activeClassName={styles.selected}
            className={`${styles.linkItem} ${styles.linkTitle}`}
            to={`/${currentRoute}/${link.id}`} >
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
          linksList.length
            ? navList
            : loadingMessage
        }
      </div>
    </aside>
  );
}