import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styles from './PeopleMainContent.module.css'
import { CharacterModel } from "../../../models/characterModel";
import imageNotFound from "../../../assets/imagePlaceHolder/Yoda-ImageNotFound.png"


/** ID parameter for the selected people */
interface ParamTypes {
  id?: string
}

export const PeopleMainContent: React.FC = () => {
  /* NOTE: I get parameters from the url, if there is an id in the parameters, I pull the character data from the store and display it,
   if not, show the stub */
  const urlParams: ParamTypes = useParams();

  /* Getting the planet I need from the entire list loaded into the store */
  const character: CharacterModel = useSelector((state: any) =>
    state.peoples.find((findCharacter: CharacterModel) => findCharacter.docId === Number(urlParams.id)))

  return (
    (urlParams.id && character)
      ? <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.characterInfo}>

              <div className={styles.characterName}>
                <p className={styles.value}>{character.name}</p>
              </div>

              <div className={styles.characterBirth}>
                <p className={styles.description}>Birth</p>
                <p className={styles.value}>{character.birthYear}</p>
              </div>

              <div className={styles.characterGender}>
                <p className={styles.description}>Gender</p>
                <p className={styles.value}>{character.gender}</p>
              </div>

              <div className={styles.characterHeight}>
                <p className={styles.description}>Height</p>
                <p className={styles.value}>{character.height}</p>
              </div>

              <div className={styles.characterMass}>
                <p className={styles.description}>Mass</p>
                <p className={styles.value}>{character.mass}</p>
              </div>

              <div className={styles.characterEye}>
                <p className={styles.description}>Eye color</p>
                <p className={styles.value}>{character.eyeColor}</p>
              </div>

              <div className={styles.characterHair}>
                <p className={styles.description}>Hair color</p>
                <p className={styles.value}>{character.hairColor}</p>
              </div>
            </div>

            <div className={styles.characterPicture}>
              <div className={styles.picture}>
                <div className={styles.shadowPanel} />
                {
                  character && <img alt={character.name} src={character.image ? character.image : imageNotFound} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      : null
  )
}