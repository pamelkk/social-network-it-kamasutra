import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import gamesMenuReducer from "./gamesMenuReducer";
import applicationsMenuReducer from "./applicationsMenuReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    gamesMenu: gamesMenuReducer,
    applicationsMenu: applicationsMenuReducer
});

let store = createStore(reducers);

export default store;