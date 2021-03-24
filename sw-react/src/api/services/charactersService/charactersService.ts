import { db } from '../../firebaseService'
import { store } from '../../../store/store';
import { CharacterModel } from '../../../models';
import { mapCharacterDtoToCharacterModel } from '../../mappers';

const { dispatch } = store

/* FIXME: Add typing for return values */

export const loadAllCharacters = () => (
  db.firestore().collection("people")
    .onSnapshot((querySnapshot) => {

      const peoples: CharacterModel[] = []

      querySnapshot.forEach((doc) => {
        const mapped: CharacterModel = mapCharacterDtoToCharacterModel(doc.data().fields, doc.data().pk)
        peoples.push(mapped);
      });

      dispatch({
        type: 'peoples/loadAllPeoples',
        payload: peoples
      })
    })
    /* TODO: Handle possible errors while receiving data */
)