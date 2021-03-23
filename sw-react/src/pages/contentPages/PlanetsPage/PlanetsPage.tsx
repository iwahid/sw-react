import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadAllPlanet } from '../../../api/services/planetsService/planetsService';
import { AsideList } from '../../../components/AsideList';
import { PlanetMainContent } from '../../../components/MainContent/PlanetMainContent/PlanetMainContent';
import { PlanetModel } from '../../../models/planetModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import styles from '../commonStyles.module.css';



export const PlanetsPage: React.FC = () => {

  const currentRoute = 'planets'

  useEffect(() => loadAllPlanet(), [])

  const selector = (state: any) => state.planets.map((planet: PlanetModel) => (
      {
        title: planet.name,
        id: planet.docId
      }
    ))

  const linksList: IAsideLink[] = useSelector(selector)

  /* FIXME: удалить MainContent компонент */
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aside}>
          <AsideList currentRoute={currentRoute} linksList={linksList} />
        </div>

        <div className={styles.mainContent}>
          <PlanetMainContent  />
        </div>
      </div>
    </div>
  )
}