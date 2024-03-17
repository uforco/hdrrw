import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamiccounter/dynamicCounterReducer";
import bookingReducer from './bookingapp/bookingReducer';

const rootReducer = combineReducers({
    staticCount: counterReducer,
    dynamicCount: dynamicCounterReducer,
    bookingodata: bookingReducer
})

export default rootReducer