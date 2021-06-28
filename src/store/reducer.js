import { STORE, UPDATE, RESET } from './actionTypes';
import { initialData } from './initialData';

export default function reducer (storeData, action) {
    let updatedStoreData = {...storeData};
    switch (action.type) {
        case STORE:
            updatedStoreData.currentColor = action.payload;
            return updatedStoreData;
        case UPDATE: 
            updatedStoreData.payload.node = action.payload.newColor;
            return updatedStoreData;
        case RESET:
            return initialData;
        default: 
            return storeData || initialData;
        ;
    }
}