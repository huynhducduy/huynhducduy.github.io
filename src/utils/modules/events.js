import * as states from "./states";

// Naming convention: state

export const request = function({ namespace, type }) {
    return {
        type: `${namespace}_${type}_${states.REQUEST}`,
    };
};

export const success = function({ namespace, type, data }) {
    return {
        type   : `${namespace}_${type}_${states.SUCCESS}`,
        payload: data,
    };
};

export const failure = function({ namespace, type, error }) {
    return {
        type   : `${namespace}_${type}_${states.FAILURE}`,
        payload: error,
    };
};
