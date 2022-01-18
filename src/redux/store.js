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

// HOW WE USE: #redux step7
// const dispatch = useDispatch();
// dispatch(ACTION_TYPE(payload));
// const stateGeneral = useSelector((state) => state.stateGeneral);