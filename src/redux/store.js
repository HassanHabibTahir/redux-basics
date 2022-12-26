//import redux from redux;
// create Store; 
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// create Store
// plance function 
// all functions are defined in the store;
const store = createStore(rootReducer, composeWithDevTools());

export default store;




