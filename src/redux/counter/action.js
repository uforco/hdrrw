
import { DECREMENT, INCREMENT } from './actionType';

export const increment = (value) => {
    return {
        type: INCREMENT,
        pyload: value
    }
}
export const decrement= (value) => {
    return {
        type: DECREMENT,
        pyload: value
    }
}