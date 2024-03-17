import { BOOKINGADD, BOOKINGDELETE } from "./actionType"

const bookinglist = []

const bookingReducer = (State = bookinglist, action ) => {
    switch (action.type){
        case BOOKINGADD:
            return [...State, action.pyload]
            //console.log(action.pyload)
            // break
        case BOOKINGDELETE:
            // console.log(action.pyload)
            return[ ...State.filter( (item, inx) => inx !== action.pyload ) ]
        default:
            return State
    }
}
export default bookingReducer