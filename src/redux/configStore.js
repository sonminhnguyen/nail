import { createStore, combineReducers } from 'redux';
import bookDateReducer from './reducers/BookDate';
import bookServiceReducer from './reducers/BookService';

const rootReducer = combineReducers ({
  bookDate: bookDateReducer,
  bookService: bookServiceReducer
});

const store = createStore(rootReducer);

// store.dispatch(addService({serviceName: 'Cut nail', priceService: '3'}))
// store.dispatch(addService({serviceName: 'draw nail', priceService: '10'}))

//have to export a function not a object
export default () => {
  return store;
};