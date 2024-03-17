import { DECREMENT, INCREMENT } from "./actionType"

const initialState = {
    value : 20
}

const dynamicCounterReducer = (State = initialState, action ) => {
    switch (action.type) {
        case INCREMENT :
            return {
                ...State,
                value: State.value + action.pyload
                
            }
        case DECREMENT :
            return {
                ...State,
                value: State.value - action.pyload
            }
        default:
            return State
    }
}

export default dynamicCounterReducer