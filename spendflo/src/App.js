import logo from './logo.svg';
import './App.css';
import Banner from './Components/HomePage/Banner'
import Header from './Components/HomePage/Header'
import Footer from './Components/HomePage/Footer'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Banner />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
