import { BOOKINGADD, BOOKINGDELETE } from "./actionType"


export const bookingadd = (value) => {
    return {
        type: BOOKINGADD,
        pyload: value
    }
}
export const bookingdelete = (value) => {
    return {
        type: BOOKINGDELETE,
        pyload: value
    }
}