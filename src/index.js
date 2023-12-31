import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';
import { GlobalStyle } from 'GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/MHP-Quality">
            <App />
          </BrowserRouter>
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
