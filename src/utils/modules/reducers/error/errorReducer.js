import * as states from "../../states";

export default (state = {}, action) => {
    const { type, payload } = action;

    const matches = new RegExp(
        `(.*)_(${states.REQUEST}|${states.FAILURE})`
    ).exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;

    return {
        ...state,
        [requestName]: requestState === states.FAILURE ? payload : "",
    };
};
