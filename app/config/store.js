
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';


const middleWare= [];

// if (process.env.NODE.ENV === 'development') {
//     middleWare.push(logger);
// }

const store= createStore(reducers, applyMiddleware(...middleWare));


export default store;