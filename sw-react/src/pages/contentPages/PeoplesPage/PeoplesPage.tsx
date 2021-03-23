import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AsideList } from '../../../components/AsideList';
import { loadAllCharacters } from '../../../api/services/charactersService/charactersService';
import { CharacterModel } from '../../../models/characterModel';
import { IAsideLink } from '../../../models/sharedInterfaces/asideLink';
import { PeopleMainContent } from "../../../components/MainContent/PeopleMainContent/PeopleMainContent";
import styles from '../commonStyles.module.css'

export const PeoplesPage: React.FC = () => {

  const currentRoute = 'peoples'

  useEffect(() => loadAllCharacters(), [])

  const selector = (state: any) => state.peoples.map((people: CharacterModel) => (
      {
        title: people.name,
        id: people.docId
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
          <PeopleMainContent />
        </div>
      </div>
    </div>
  )
}