import './App.css';
import News from './components/News'

function App() {
  return (
    <div className="App">
      <h1>TbiliNews</h1>
      <News />
      <div className='footer'>
      <p>Created with love and care in Tbilisi<br/><a href='https://github.com/kawaiier/tbilinews'>by Sergey Manvelov</a></p>
      </div>
    </div>
  );
}

export default App;
