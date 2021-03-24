import { CharacterModel } from '../../../models/characterModel';
import { db } from '../../firebaseService'
import { mapCharacterDtoToCharacterModel } from '../../mappers/characterMapper';
import { store } from '../../../store/store';

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