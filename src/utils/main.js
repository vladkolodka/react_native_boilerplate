export function createReducer(initialState, reducersMap) {
    return function (state = initialState, action) {
        if(reducersMap[action.type])
            return reducersMap[action.type](state, action);
        return state;
    };
}