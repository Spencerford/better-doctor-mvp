let defaultState = {
    results: []
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            results: action.data
        }
    } return {
        ...state
    }
}

export default mainReducer;