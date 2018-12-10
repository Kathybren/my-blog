import { combineReducers } from 'redux-immutable'
import codeReducer from '../pages/code/store/reducer'
export default combineReducers({
    code: codeReducer
})