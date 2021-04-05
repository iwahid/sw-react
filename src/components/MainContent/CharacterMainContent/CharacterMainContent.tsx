import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CharacterModel } from "../../../models";
import imageNotFound from "../../../assets/imagePlaceHolder/Yoda-ImageNotFound.png"
import { RootState } from '../../../store/store';
import styles from './CharacterMainContent.module.scss'


/** ID parameter for the selected people */
interface ParamTypes {
  id?: string
}

/** A page containing detailed information on the selected character */
export const CharacterMainContent: React.FC = () => {
  /* NOTE: I get parameters from the url, if there is an id in the parameters, I pull the character data from the store and display it,
   if not, show the stub */
  const urlParams: ParamTypes = useParams();

  /* Getting the planet I need from the entire list loaded into the store */
  const character: CharacterModel | undefined = useSelector((state: RootState) =>
    state.characters.find((findCharacter: CharacterModel) => findCharacter.docId === Number(urlParams.id)))

  return (
    <div className={styles.wrapper}>
      {urlParams.id && character && (
        <div className={styles.container}>
          <div className={styles.content}>


            <div className={styles.characterPicture}>
              <div className={styles.characterPicture__wrapper}>
                {/* <div className={styles.shadowPanel} /> */}
                {
                  character &&
                  <div
                    className={styles.characterPicture__image}
                    style={{
                      backgroundImage: `url('${character.image ? character.image : imageNotFound}') `,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      overflow: 'hidden',
                    }}
                  />
                }
              </div>
            </div>

            <div className={styles.characterInfo}>

              <div className={styles.characterInfo__header}>

                <div className={styles.characterInfo__row}>
                  <p className={styles.characterInfo__name}>{character.name}</p>
                </div>

                <div className={styles.characterInfo__row}>
                  <p className={styles.characterInfo__gender}>{character.gender}</p>
                  <p className={styles.characterInfo__birth}>Birth: {character.birthYear}</p>
                </div>

              </div>

              <div className={styles.characterInfo__body}>
                <div className={styles.characterInfo__row}>
                  <div className={styles.characterInfo__column}>
                    <p className={styles.characterInfo__value}>{character.height}</p>
                    <p className={styles.characterInfo__subTitle}>Height</p>
                  </div>
                  <div className={styles.characterInfo__column}>
                    <p className={styles.characterInfo__value}>{character.mass}</p>
                    <p className={styles.characterInfo__subTitle}>Mass</p>
                  </div>
                  <div className={styles.characterInfo__column}>
                    <p className={styles.characterInfo__value}>{character.eyeColor}</p>
                    <p className={styles.characterInfo__subTitle}>Eye color</p>
                  </div>
                  <div className={styles.characterInfo__column}>
                    <p className={styles.characterInfo__value}>{character.hairColor}</p>
                    <p className={styles.characterInfo__subTitle}>Hair color</p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  )
}