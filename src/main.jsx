import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { persistor, store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function WebSocketInitWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'websocket/connect' });
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <RouterProvider router={router} /> */}

        <WebSocketInitWrapper />
      </PersistGate>
    </Provider>
  </StrictMode>
);
