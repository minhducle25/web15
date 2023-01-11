import logo from './logo.svg';
import './App.css';
import Buoi1 from './buoi1/buoi1';
import Content from './buoi1/content';
import Footer from './buoi1/footer';
import Buoi2 from './buoi2/buoi2';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" caseSensitive element={<Buoi1/>}/>
          <Route path="/buoi2" element={<Buoi2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
