import {
    createStore,
    applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

// import fetchMiddleware from './middleware/fetchMiddleware';
import reducer from './reducer/reducers';

export const history = createBrowserHistory();

const enhancer = composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
    )
);

export default function configStore(initialState) {
    const store = createStore(reducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('./reducer/reducers', () =>
            store.replaceReducer(require('./reducer/reducers').default)
        );
    }
    return store;
}