import { DECREMENT, INCREMENT } from "./actionType"

const initialState = {
    value : 0
}

const counterReducer = (State = initialState, action ) => {
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

export default counterReducer