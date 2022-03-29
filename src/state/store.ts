import { reducer as RootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

// store.dispatch({ type: 'ACTION_TYPE_TEST' });
