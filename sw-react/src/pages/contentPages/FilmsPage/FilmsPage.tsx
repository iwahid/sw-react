/* Just wrapper */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadAllFilms } from '../../../api/services/FilmsService/filmsService';
import { AsideList } from '../../../components/AsideList';
import { FilmMainContent } from '../../../components/MainContent/FilmMainContent';
import { FilmModel } from '../../../models/filmModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import styles from '../commonStyles.module.css';

/* NOTE: каждый раз, при входе в компонент я заново загружаю все данные из APi, а не пользуюсь уже ранее сохранёнными в сторе, потому что это необходимо по условию задачи */

export const FilmsPage: React.FC = () => {

  const currentRoute = 'films'

  useEffect(() => loadAllFilms(), [])

  /* NOTE: на основе массива с фильмами формирую список, для его последующего рендеринга в сайд-баре */
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