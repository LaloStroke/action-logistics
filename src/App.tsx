import { Provider } from 'react-redux';
import './App.css';
import Router from './router/index';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
