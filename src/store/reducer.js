import { STORE, UPDATE, RESET } from './actionTypes';
import { initialData } from './initialData';

export default function reducer (storeData, action) {
    switch (action.type) {
        case STORE:
            return {
                ...storeData,
                currentColor: action.newColor
            }
        case UPDATE: 
            return {
                ...storeData,
                action.node: action.newColor
            }
        case RESET:
            let updatedStoreData = {}
            for (item in storeData) {
                item = "#343a40";
            }
            return updatedStoreData;
        default: 
            return storeData || initialData;
        ;
    }
}