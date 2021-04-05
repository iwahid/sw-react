import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useMedia from 'use-media';
import { AsideList } from '../../../components/AsideList';
import { CharacterMainContent } from "../../../components/MainContent/CharacterMainContent/CharacterMainContent";
import { loadAllCharacters } from '../../../api/services/charactersService/charactersService';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import { CharacterModel } from '../../../models/characterModel';
import { RootState } from '../../../store/store';
import styles from '../commonStyles.module.scss'

/** ID parameter for the selected film */
interface ParamTypes {
  id?: string
}

/** Provider container page, for the characters page wrapping the content page
 *  and passing the necessary data to the main components */
export const CharactersPage: React.FC = () => {

  const { id } = useParams<ParamTypes>();

  /* A media expression to determine the width of the current screen. For conditional rendering */
  const isNarrow = useMedia({ maxWidth: '768px' })


  const currentRoute = 'characters'

  useEffect(() => loadAllCharacters(), [])

  const selector = (state: RootState) => state
    .characters
    .map((character: CharacterModel) => (
      {
        title: character.name,
        id: character.docId
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
            <CharacterMainContent />
          </div>
        }

      </div>
    </div>
  )
}