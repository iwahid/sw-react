/* Just wrapper */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadAllFilms } from '../../../api/services/FilmsService/filmsService';
import { AsideList } from '../../../components/AsideList';
import { FilmMainContent } from '../../../components/MainContent/FilmMainContent';
import { FilmModel } from '../../../models/filmModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import styles from '../commonStyles.module.css';

/* NOTE: every time I enter the component, I reload all the data from APi, and do not use the data already saved in the store, because it is necessary by the condition of the task */

/** Provider container page, for the films page wrapping the content page
 *  and passing the necessary data to the main components */
export const FilmsPage: React.FC = () => {

  const currentRoute = 'films'

  useEffect(() => loadAllFilms(), [])

  /* Based on the array with movies, I form a list for its subsequent rendering in the side bar */
  const selector = (state: any) => state
    .films
    .map((film: FilmModel) => (
      {
        title: film.title,
        id: film.docId
      }
    ))

  const linksList: IAsideLink[] = useSelector(selector)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aside}>
          <AsideList currentRoute={currentRoute} linksList={linksList} />
        </div>

        <div className={styles.mainContent}>
          <FilmMainContent />
        </div>
      </div>
    </div>
  );
}