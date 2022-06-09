import { createStore } from "redux";
import rootReducers from "./src/reducers";

const store = createStore(rootReducers);
export default store;
