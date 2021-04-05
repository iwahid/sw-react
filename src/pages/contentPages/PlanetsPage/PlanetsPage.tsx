import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useMedia from 'use-media';
import { loadAllPlanet } from '../../../api/services/planetsService/planetsService';
import { AsideList } from '../../../components/AsideList';
import { PlanetMainContent } from '../../../components/MainContent/PlanetMainContent/PlanetMainContent';
import { PlanetModel } from '../../../models/planetModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import { RootState } from '../../../store/store';
import styles from '../commonStyles.module.scss';

/** ID parameter for the selected film */
interface ParamTypes {
  id?: string
}

/** Provider container page, for the planets page wrapping the content page
 *  and passing the necessary data to the main components */
export const PlanetsPage: React.FC = () => {

  const { id } = useParams<ParamTypes>();

  /* A media expression to determine the width of the current screen. For conditional rendering */
  const isNarrow = useMedia({ maxWidth: '768px' })

  const currentRoute = 'planets'

  useEffect(() => loadAllPlanet(), [])

  const selector = (state: RootState) => state.planets.map((planet: PlanetModel) => (
    {
      title: planet.name,
      id: planet.docId
    }
  ))

  const linksList: IAsideLink[] = useSelector(selector)

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
            <PlanetMainContent />
          </div>
        }

      </div>
    </div>
  )
}