import { STORE, UPDATE, RESET } from './actionTypes';

export const storeColor = (newColor) => {
    return {
        type: STORE,
        payload: newColor,
    }
};

export const updateColor = (node, newColor) => {
    return {
        type: UPDATE,
        payload: {node, newColor}
    }
};

export const resetColors = () => {
    return {
        type: RESET
    }
};