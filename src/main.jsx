import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
const queryclint = new QueryClient();
import 'react-lazy-load-image-component/src/effects/blur.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <QueryClientProvider client={queryclint} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode >,
)
