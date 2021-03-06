/* Just wrapper */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useMedia from 'use-media';
import { loadAllFilms } from '../../../api/services/FilmsService/filmsService';
import { AsideList } from '../../../components/AsideList';
import { FilmMainContent } from '../../../components/MainContent/FilmMainContent';
import { FilmModel } from '../../../models/filmModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import { RootState } from '../../../store/store';
import styles from '../commonStyles.module.scss';

/* NOTE: every time I enter the component, I reload all the data from APi, and do not use the data already saved in the store, because it is necessary by the condition of the task */

/** ID parameter for the selected film */
interface ParamTypes {
  id?: string
}

/** Provider container page, for the films page wrapping the content page
 *  and passing the necessary data to the main components */
export const FilmsPage: React.FC = () => {

  const { id } = useParams<ParamTypes>();

  /* A media expression to determine the width of the current screen. For conditional rendering */
  const isNarrow = useMedia({ maxWidth: '768px' })

  const currentRoute = 'films'

  useEffect(() => loadAllFilms(), [])

  /* Based on the array with movies, I form a list for its subsequent rendering in the side bar */
  const selector = (state: RootState) => state
    .films
    .map((film: FilmModel) => (
      {
        title: film.title,
        id: film.docId
      }
    ))

  const linksList: IAsideLink[] = useSelector(selector)

  /* NOTE: To adapt the complex layout for mobile devices, I made a stepped rendering of the component. The nav list and the page about ilma are rendered alternately */

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* Render the Aside-list always, except for the case when the screen is already 768px and the film is not selected for viewing */}
        {!(id && isNarrow) &&
          <div className={styles.aside}>
            <AsideList currentRoute={currentRoute} linksList={linksList} />
          </div>
        }

        {/* Render the film-information component always except for narrow screens when film is not selected */}
        {(isNarrow && !id)
          ? null
          : <div className={styles.mainContent}>
            <FilmMainContent />
          </div>
        }

      </div>
    </div>
  );
}