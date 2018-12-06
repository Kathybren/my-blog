import {  combineReducers } from 'redux'
import hreaderReducer from '../components/header/store/reducer'
export default combineReducers({
    header: hreaderReducer
})