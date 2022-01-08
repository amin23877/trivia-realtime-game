// #redux step3
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { generalReducer } from './reducers/mainReducer/generalReducer';

const rootReducer = combineReducers({
  stateGeneral: generalReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
