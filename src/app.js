import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
// import configStore from './redux/configStore';
// import { Provider } from 'react-redux';
// import { addBookingDate } from './redux/reducers/BookDate';
import './styles/styles.scss'
// import './styles.css'

// const store = configStore();

// store.dispatch(addService({serviceName: 'Cut nail', priceService: '3'}))

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(addBookingDate({}))

const App = (
  // <Provider store={store}>
    <AppRouter />
  // </Provider>
);

ReactDOM.render(App, document.getElementById('app'));