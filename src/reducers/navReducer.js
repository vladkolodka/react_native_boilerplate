import ReduxNavigator from '../navigators/ReduxNavigator';

const initialState = ReduxNavigator.router.getStateForAction(
    ReduxNavigator.router.getActionForPathAndParams('Root')
);

export const nav = (state = initialState, action) =>
{
    console.log("ACTION", action);
    return ReduxNavigator.router.getStateForAction(action, state) || state;
};