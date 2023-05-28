import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SignedOutPackage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
