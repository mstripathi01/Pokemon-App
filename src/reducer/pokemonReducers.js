import { ADD_TOFAV,REMOVE_FAV } from '../actions/actionTypes'
import { db } from '../firebase_config'


const initialData = {
    fav : []
}

const pokemonReducers = (state = initialData ,action) => {
    switch (action.type) {
        case ADD_TOFAV:
        return {
                ...state,
                fav : action.payload
            }

            case REMOVE_FAV:
                const newFav = db.collection('fav').doc(action.id).delete()    
                
                return {
                    ...state,
                    fav : newFav
                }
                
        default : return state;
}
}
export default pokemonReducers;