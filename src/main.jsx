import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import Dashboard from './containers/Dashboard';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
)
