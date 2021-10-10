import { createStore } from 'redux';
import { status, sort } from './actions/index';
import Reducer from './reducers/index'
const store = createStore(Reducer);
console.log('Default  ' ,store.getState());

store.dispatch(status());
console.log('TOGGLE_STATUE  ' ,store.getState());




store.dispatch(sort({
   
        by : 'name',
        value : -1
    
}));
console.log('SORT' ,store.getState());



