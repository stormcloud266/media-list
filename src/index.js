import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetItems, login } from './reduxFolder/actions';
import configureStore from './reduxFolder/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetItems())
  .then(() => {
    store.dispatch(login('232'))
  })
  .then(() => {
    renderApp()
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(login(user.uuid));
    } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');
    }
  });

registerServiceWorker();
