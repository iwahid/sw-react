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

/* NOTE: the section on the films page, which displays basic information 
(details, cover, poster, film director, etc.) about the selected film, is not completed yet */

/* NOTE: Additional linked data necessary for watching a movie is loaded only at the moment when I open its page,
 and not when I go to the section with "all movies".
I do not update the movie as a whole (I don’t replace its associated data at once), 
but I do it already on the movie viewing page only because this is due to the condition of the problem. 
"Should block as little data as possible. And load it only when explicitly required by the user."
 
It makes no sense to load and update data for all films at once, when the user can watch them only for one or two.
 - The film itself is loaded anew every time, which allows you to receive always up-to-date information about it.
 - I cannot use the local Redax storage, from which I would pull out related data, 
 because it still may not have related data (they may not be loaded at the moment 
  if the user has not yet visited the pages with the planets or characters on separate pages.

 - I load related data for the movie on the page of its viewing, and not when the user pokes on the tabs.
  Of course, the user may not want to look at all the associated data (he would only need to look at the main section),
   in which case it would not be worth loading them, but it is better to load the data in advance than to make
    him wait every time he clicks to a new tab and wait for everything to be loaded there */

/* NOTE: the movie is updated gradually, in portions: when you open the movie, 
only part of the information about it is shown (the tabs are loaded one by one).
This is a little longer than if I downloaded everything at once, in one piece, 
but nevertheless, this is a good scenario, since the user will see at least part 
of the information about the movie as quickly as possible, and he does not have to wait 
for its full download to start reading the information */

/* NOTE: Re-renders often occur in the component when data is received. 
These multiple component re-renders are due to a large number of small API requests.
Each of the requests updates the object with the currently selected movie and thus
 (returning a new changed movie object in the reducer) triggers the component's rerender */

/** ID parameter for the selected film */
interface ParamTypes {
  id?: string
}

/** A page containing detailed information on the selected film */
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

  /* FIXME: An unnecessarily complex condition for checking the availability of a film */
  const backgroundImageStyles = {
    backgroundImage: `url('${film ? film.imageBackground : ''}')`,
    backgroundSize: `${film ? film.imageBackground ? 'cover' : "contain" : ''}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    overflow: 'hidden',
  }

  const loadingMessage = "Loading..."
  return (
    <div className={styles.wrapper}>
      {id && film &&
        <div className={styles.container}>

          <div className={styles.mainData} style={backgroundImageStyles}>
            <div className={styles.content}>
              <div className={styles.poster}>
                <img src={film ? film.imagePoster : ''} alt={film.title}/>
              </div>
              <div className={styles.filmInformation}>
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
                {/* <button className={styles.editButton}>Edit</button> */}
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