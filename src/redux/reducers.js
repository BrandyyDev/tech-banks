import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import banksReducer from './banks/banks.reducer';
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['banks'],
};

const appReducer = combineReducers({
    banks: banksReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
