import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer);

export { storeColor, updateColor, resetColors } from './actionCreators';