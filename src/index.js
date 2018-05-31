import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetItems } from './reduxFolder/actions';
import configureStore from './reduxFolder/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetItems()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

registerServiceWorker();
