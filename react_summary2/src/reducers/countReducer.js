
function countReducer(state= {count: 10}, action){

    console.log("..................................",action);

    const {type} = action
    
    let newState = state
    if(type=== 'INC'){
        newState = { count : state.count + 1}
    }
    return newState
}

export default countReducer