import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { store } from "../../../store/store";
import { updateCurrentFilm } from '../../../api/services/FilmsService/filmsService';
import { FilmModel, ExtendedFilmModel } from "../../../models";

import { Tabs } from '../../TabsSection/Tabs';
import { RelatedDataPanel } from '../RelatedTabs/RelatedDataPanel';
import { Panel } from '../../TabsSection/Panel';
import * as dataListService from './dataListService'

import styles from './FilmMainContent.module.css'
import "../../TabsSection/commonStyles.module.css"

/* NOTE: The section on the movies page showing the main information about the selected movie is not yet complete */
/* NOTE: Я не обновляю фильм целиком (не заменяю его связанные данные сразу), а делаю это уже на странице просмотра фильма только потому, что это по условию задачи. Я должен загражать как можно меньше данных. И загружать их только тогда, когда это явно потребуется пользователю. 
Нет смысла грузить и обновлять данные для всех фильмов сразу, когда пользователь может посмотреть их только для одного или двух.
 - Сам фильм загружается каждый раз заново, что позволяет получать получать всегда актуальную информацию о нём.
 - Я не могу воспользоваться локальным хранилищем Redax, из которого бы я вытаскивал связанные данные, поскольку в нём так же до сих пор нет связанных данных (они могут быть не загружены на текущий момент), пока пользователь не попытается просмотреть список персонажей или планет на отдельной странице
 - Загружаю связанные данные для фильма на странице его просмотра, а ни тогда, когда пользователь тыкает по вкладкам. Конечно, пользователь может и не захотеть смотреть все связанные данные (ему достаточно было бы посмотреть основной раздел), и в таком случае не стоило бы их подгружать, но лучше так - загрузить данные заранее, чем заставлять его ждать каждый раз, когда он будет нажимать на новую вкладку и ждать когда там всё прогрузиться */

/* NOTE: обновление фильма происходит постепенно, порционно: при открытии фильма, показывается лишь часть информации о нём (вкладки загружаются поочерёдно).
 Но, это хороший сценарий, поскольку пользователь максимально быстро увидит хотя бы часть информации о фильме, и ему не придётся ждать его полной загрузки, что бы начать читать информацию */

/* NOTE: множественные ререндеры компонента обусловлены большиим количеством маленьких запросов к API.
  Каждый из запросов обновляет объект с текущим выбранным фильмом и тем самым (возвращая новый изменённый объект фильма в редьюсере)
  тригерит ререндер компонента  */

/** ID parameter for the selected film */
interface ParamTypes {
  id?: string
}

export const FilmMainContent: React.FC = () => {

  const { id } = useParams<ParamTypes>();

  /* Getting the film I need from the entire list of downloaded films in the store */
  const film: FilmModel = useSelector((state: any) => state.films.find((findFilm: FilmModel) => findFilm.docId === Number(id)))

  /* Update related data for the currently selected movie every time a new movie is selected in the sidebar */
  useEffect(() => {
    store.dispatch({
      type: 'currentFilm/setCurrentFilm',
      payload: film
    })

    if (film)
      updateCurrentFilm(film)
  }, [film])

  const currentFilm: ExtendedFilmModel = useSelector((state: any) => state.currentFilm)

  const loadingMessage = "Loading..."
  return (
    <div className={styles.wrapper}>
      {id &&
        <div className={styles.container}>

          <div className={styles.mainData}>
            <div className={styles.content}>
              <div className={styles.poster} />
              <div className={styles.filmInformation}>
                {/* FIXME: Check for correct semantics */}
                <h1 className={styles.filmTitle}>{film && film.title}</h1>
                {/* TODO: Change the output format of movie information */}
                <ul className={styles.informationList}>
                  <li className={styles.informationListItem}>
                    <span className={styles.informationListTitle}>Year:</span>
                    <span className={styles.informationListContent}>{film?.releaseDate}</span>
                  </li>
                  <li className={styles.informationListItem}>
                    <span className={styles.informationListTitle}>Director:</span>
                    <span className={styles.informationListContent}>{film?.director}</span>
                  </li>
                  <li className={styles.informationListItem}>
                    <span className={styles.informationListTitle}>Episode:</span>
                    <span className={styles.informationListContent}>{film?.episodeId}</span>
                  </li>
                </ul>
                {/* FIXME: Modify the Option Button for movie editing. Depends on authorization */}
                <button className={styles.editButton}>Edit</button>
              </div>
            </div>
          </div>

          {/* TODO: Move tabs into a separate component */}
          <div className={styles.red}>
            <Tabs>
              <Panel title="Characters" >
                {currentFilm.characters
                  ? <RelatedDataPanel contentList={dataListService.getCharactersList(currentFilm)} urlPath='characters' />
                  : loadingMessage
                }
              </Panel>

              <Panel title="Planets">
                {currentFilm.planets
                  ? <RelatedDataPanel contentList={dataListService.getPlanetsList(currentFilm)} urlPath='planets' />
                  : loadingMessage
                }
              </Panel>

              {/* NOTE: Entities from the next 3 tabs will be redirected to a 404 page because they don't have detailed view pages */}
              <Panel title="Species">
                {currentFilm.species
                  ? <RelatedDataPanel contentList={dataListService.getSpeciesList(currentFilm)} urlPath='species' />
                  : loadingMessage
                }
              </Panel>

              <Panel title="Starships">
                {currentFilm.starships
                  ? <RelatedDataPanel contentList={dataListService.getStarshipsList(currentFilm)} urlPath='starships' />
                  : loadingMessage
                }
              </Panel>

              <Panel title="Vehicles">
                {currentFilm.vehicles
                  ? <RelatedDataPanel contentList={dataListService.getVehiclesList(currentFilm)} urlPath='vehicles' />
                  : loadingMessage
                }
              </Panel>

            </Tabs>
          </div>
        </div>
      }
    </div>
  )
}