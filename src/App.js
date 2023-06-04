import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';
import SignedOutSubscriptions from './components/signed-out-package/signed-out-pages/SignedOutSubscriptions';
import SignedOutLibrary from './components/signed-out-package/signed-out-pages/SignedOutLibrary';
import SignedOutHistory from './components/signed-out-package/signed-out-pages/SignedOutHistory';
import SignedInPackage from './components/signed-in-package/SignedInPackage';
import HomePage from './components/HomePage';

function App() {
  const [online, setOnline] = useState(true);

  return (
    <div className="app">
      <BrowserRouter>
        {online ? <SignedInPackage/> : <SignedOutPackage/>}
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
