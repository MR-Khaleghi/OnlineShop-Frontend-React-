import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';
import persistReducer from "redux-persist/es/persistReducer";
import { PersistConfig, persistStore, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMidleware } from "./middleware/logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";


export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    process.env.NODE_ENV !== 'production' &&
    logger,
    sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer = (process.env.NODE_ENV !== 'production' &&
 window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers );

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
