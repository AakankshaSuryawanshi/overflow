const usersReducer = (states = [], action) => {
    switch(action.type) {
        case '':
            return action.payload;
        default:
            return states;
    }
}

export default usersReducer