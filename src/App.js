import './style.scss';
import Header from './components/Header';
import Nodes from './components/Nodes';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Nodes />
      </div>
    </Provider>
  );
}

export default App;
