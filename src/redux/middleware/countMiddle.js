import rootReducer from "../rootReducer"


const countMiddle = store => next => action => {

    // console.log(`befor: ${JSON.stringify(store)}`)
    console.log(JSON.stringify(store.getState()))
    console.log(JSON.stringify(action))

    console.log(JSON.stringify([action].reduce( rootReducer,  store.getState())))

    return next(action)
}
// const countMiddle = (x) => {
//     console.log(x)
// }

export default countMiddle