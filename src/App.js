import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';
import HomePage from './components/HomePage';
import SignedOutSubscriptions from './components/signed-out-package/signed-out-pages/SignedOutSubscriptions';
import SignedOutLibrary from './components/signed-out-package/signed-out-pages/SignedOutLibrary';
import SignedOutHistory from './components/signed-out-package/signed-out-pages/SignedOutHistory';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SignedOutPackage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/subscriptions" element={<SignedOutSubscriptions/>}/>
          <Route path="/library" element={<SignedOutLibrary/>}/>
          <Route path="/history" element={<SignedOutHistory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
