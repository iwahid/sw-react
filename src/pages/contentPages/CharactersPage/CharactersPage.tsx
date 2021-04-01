import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AsideList } from '../../../components/AsideList';
import { CharacterMainContent } from "../../../components/MainContent/CharacterMainContent/CharacterMainContent";
import { loadAllCharacters } from '../../../api/services/charactersService/charactersService';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import { CharacterModel } from '../../../models/characterModel';
import { RootState } from '../../../store/store';
import styles from '../commonStyles.module.css'

/** Provider container page, for the characters page wrapping the content page
 *  and passing the necessary data to the main components */
export const CharactersPage: React.FC = () => {

  const currentRoute = 'characters'

  useEffect(() => loadAllCharacters(), [])

  const selector = (state: RootState) => state.characters.map((character: CharacterModel) => (
    {
      title: character.name,
      id: character.docId
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
          <CharacterMainContent />
        </div>
      </div>
    </div>
  )
}