// #redux step3
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { topicsReducer } from "./reducers/topicReducer/topicsReducer";
import { generalReducer } from "./reducers/mainReducer/generalReducer";
import { userReducer } from "./reducers/userReducer/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	stateGeneral: generalReducer,
	stateTopic: topicsReducer,
	stateUser: userReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(
// 	rootReducer,
// 	compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
// );

export default store;

// HOW WE USE: #redux step7
// const dispatch = useDispatch();
// dispatch(ACTION_TYPE(payload));
// const stateGeneral = useSelector((state) => state.stateGeneral);
