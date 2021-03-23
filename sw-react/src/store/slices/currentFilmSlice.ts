/* FIXME: добавить типизацию для начального стейта */
import { FilmModel } from '../../models/filmModel';

const initialState: FilmModel = {
  characters: [],
  created: '',
  director: '',
  edited: '',
  episodeId: 0,
  openingCrawl: '',
  planets: [],
  producer: '',
  releaseDate: '',
  species: [],
  starships: [],
  title: '',
  vehicles: [],
  docId: 0,
}

/* FIXME: типизировать экшены */
export const currentFilmReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'currentFilm/setCurrentFilm': {
      return {...action.payload} 
    }
    case 'currentFilm/loadCharactersToCurrentFilm': {
      return {...state, characters: [...action.payload]}
    }
    case 'currentFilm/loadPlanetsToCurrentFilm': {
      return {...state, planets: [...action.payload]}
    }
    case 'currentFilm/loadSpeciesToCurrentFilm': {
      return {...state, species: [...action.payload]}
    }
    case 'currentFilm/loadStarshipsToCurrentFilm': {
      return {...state, starships: [...action.payload]}
    }
    case 'currentFilm/loadVehiclesToCurrentFilm': {
      return {...state, vehicles: [...action.payload]}
    }
    case 'currentFilm/loadTransportToCurrentFilm': {
      return {...state, species: [...action.payload]}
    }
    default:
      return state
  }
}



/* Это часть общего редьюсера, которая отвечает за работу с todo-шками. Но, помимо самого редьюсера, сюда так же можно поместить и функции-преобразователи, которые будут
 задиспатчены в store, но перед этим автоматом попадут в middleware от Redux Thunk

 Т.е. помимо экшенов, если мы захоитм иметь доп логику, то мы можем задиспатчить и функции.
 Именно потому что, что я использую redux-thunk, который даёт мне middleware, я могу прокидывать в стор не только экшены, но и целые функции, которые могут быть ещё и асинхронными.
 Работа с ними по принципу: вместо прямого вызова экшена, вызывается функция, которая тоже вызовет какой-то (определённый заранее) экшн, НО ПЕРЕД ЭТИМ СДЕЛАЕТ ЧТО-ТО ЕЩЁ
 Функция может отправить/получить данные, мутировать, преобразовать их.

 Эти функции изначально имеют доступ к методам стора, таким как: dispatch и getState. Вместо экшена вызов функции, которая что-то сделает и потом (если это необходимо) сама вызовет описаный в ней экшн
 */


 
/* функция по созданию экшенов */
/* export const peoplesLoaded:any  = (peoples:any) => {
  return {
    type: 'peoples/getAll',
    payload: peoples
  }
}  */

/* функция по созданию экшенов */
/* export const todosLoaded:any  = todos:any => {
  return {
    type: 'todos/todosLoaded',
    payload: todos
  }
} */

// Thunk function. Расположена здесь, поскольку непосредственно связана с работой с todo-шками
/* export async function fetchTodos(dispatch, getState) {

  const response = await client.get('/fakeApi/todos')

  setTimeout(() => {
    dispatch(todosLoaded(response.todos))
  }, 3000);
}
 */

/* конструктор для экшенов-создания */
/* export const todoAdded = todo => {
  return {
    type: 'todos/todoAdded',
    payload: todo
  }
}
 */
/* Асинхронная функция по добавлению нового todo. Вынужден оборачивать функцию в другую функцию, что бы в последствии, когда вложенная функция будет передана в dispatch - она уже имела доступ к переменной с текстом (через замыкание).
   Я не могу вызвать функцию при её отправке в dispatch, поскольку тогда я её вызову, а мне нужно передать функцию по ссылке  */
// Write a synchronous outer function that receives the `text` parameter:
/* export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    // Now we can use the text value and send it to the server
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch(todoAdded(response.todo))
  }
} */