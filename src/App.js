import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';
import HomePage from './components/HomePage';
import SignedOutSubscriptions from './components/signed-out-package/signed-out-pages/SignedOutSubscriptions';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SignedOutPackage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/subscriptions" element={<SignedOutSubscriptions/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
