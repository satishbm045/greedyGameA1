import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {dataReducer} from './dataReducer';

const rootReducer = combineReducers({
	dataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;