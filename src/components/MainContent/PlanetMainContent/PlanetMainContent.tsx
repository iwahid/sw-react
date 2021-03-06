import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { PlanetModel } from '../../../models';
import { RootState } from '../../../store/store';
import imageNotFound from "../../../assets/imagePlaceHolder/Yoda-ImageNotFound.png"
import styles from './PlanetMainContent.module.scss'

/** ID parameter for the selected planet */
interface ParamTypes {
  id?: string
}
/** A page containing detailed information on the selected planet */
export const PlanetMainContent: React.FC = () => {

  const urlParams: ParamTypes = useParams();

  /* I get the planet I need from the entire list of loaded planets in the store */
  const planet: PlanetModel | undefined = useSelector((state: RootState) => state.planets.find((findPlanet: PlanetModel) => findPlanet.docId === Number(urlParams.id)))

  /* FIXME: An unnecessarily complex condition for checking the availability of a planet */
  const backgroundImageStyles = {
    backgroundImage: `url('${planet ? planet.image ? planet.image : imageNotFound : ''}')`,
    backgroundSize: `${planet ? planet.image ? 'cover' : "contain" : ''}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    overflow: 'hidden',
  }

  return (
    <div className={styles.wrapper}>
      {urlParams.id &&
        <div className={styles.container} style={backgroundImageStyles}>
          <div className={styles.content}>
            {planet &&
              <div className={styles.planetInfo}>
                <div className={`${styles.planetName} ${styles.planetInfoItem} `}>
                  <p className={styles.value}>{planet.name}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Climate</p>
                  <p className={styles.value}>{planet.climate}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Diameter</p>
                  <p className={styles.value}>{planet.diameter}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Gravity</p>
                  <p className={styles.value}>{planet.gravity}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Orbital period</p>
                  <p className={styles.value}>{planet.orbitalPeriod}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Population</p>
                  <p className={styles.value}>{planet.population}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Rotation period</p>
                  <p className={styles.value}>{planet.rotationPeriod}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Surface water</p>
                  <p className={styles.value}>{planet.surfaceWater}</p>
                </div>

                <div className={styles.planetInfo__item}>
                  <p className={styles.description}>Terrain</p>
                  <p className={styles.value}>{planet.terrain}</p>
                </div>
              </div>}
          </div>
        </div>
      }
    </div>
  )
}