import { db } from '../../firebaseService'
import { store } from '../../../store/store';
import { CharacterModel } from '../../../models';
import { mapCharacterDtoToCharacterModel } from '../../mappers';

const { dispatch } = store


/**
 *  Downloads all characters and saves to the store using a subscription
 * 
 * @returns An unsubscribe function that needs to be called to unsubscribe from receiving new data
 */
export const loadAllCharacters = (): (() => void) => (
  db.firestore().collection("people")
    .onSnapshot((querySnapshot) => {

      const characters: CharacterModel[] = []

      querySnapshot.forEach((doc) => {
        const mapped: CharacterModel = mapCharacterDtoToCharacterModel(doc.data().fields, doc.data().pk)
        characters.push(mapped);
      });

      dispatch({
        type: 'characters/loadAllCharacters',
        payload: characters
      })
    })
  /* TODO: Handle possible errors while receiving data */
)