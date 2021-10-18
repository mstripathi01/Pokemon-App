import { ADD_TOFAV, REMOVE_FAV} from './actionTypes'

export const addToFav = (data) => {
    return {
       type: ADD_TOFAV,
       payload: data,
     }
   }
     
   export const removeToFav = (id) => {
    return {
      type: REMOVE_FAV,
     id
    }
    
  }