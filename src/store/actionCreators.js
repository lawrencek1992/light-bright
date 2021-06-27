import { STORE, UPDATE, RESET } from './actionTypes';

export const storeColor = (newColor) => {
    return {
        type: STORE,
        newColor: newColor,
    }
};

export const updateColor = (node, newColor) => {
    return {
        type: UPDATE,
        node: node,
        newColor: newColor,
    }
};

export const resetColors = () => {
    return {
        type: RESET
    }
};