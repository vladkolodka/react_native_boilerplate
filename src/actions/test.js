const { TEST } = require('../constants/actionTypes.json');

export function setTested() {
    return {
        type: TEST
    };
}