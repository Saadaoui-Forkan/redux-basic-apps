import Header from './component/Header';
import './App.css';
import Aside from './component/Aside';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Aside />
        <Main />
      </div>

    </div>
  );
}

export default App;
