import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';

function App() {
  return (
    <BrowserRouter>
      <SignedOutPackage/>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
