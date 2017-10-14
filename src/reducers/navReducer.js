import Navigator from '../navigators/LoginNavigator';

export const navReducer = (state, action) => {
    console.log("REDUCER NAV", Navigator);
    const nextState = Navigator.router.getStateForAction(action, state);

    return nextState || state;
};