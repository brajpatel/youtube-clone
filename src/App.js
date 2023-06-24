import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignedOutPackage from './components/signed-out-package/SignedOutPackage';
import SignedOutSubscriptions from './components/signed-out-package/signed-out-pages/SignedOutSubscriptions';
import SignedOutLibrary from './components/signed-out-package/signed-out-pages/SignedOutLibrary';
import SignedOutHistory from './components/signed-out-package/signed-out-pages/SignedOutHistory';
import SignedInPackage from './components/signed-in-package/SignedInPackage';
import HomePage from './components/homepage/HomePage';
import SearchedResultsPage from './components/searched-results-page/SearchedResultsPage';
import WatchPage from './components/watch-page/WatchPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app">
      <BrowserRouter>
        <SignedOutPackage activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Routes>
          <Route path="/" element={<HomePage setActiveTab={setActiveTab}/>}/>
          <Route path="/subscriptions" element={<SignedOutSubscriptions/>}/>
          <Route path="/library" element={<SignedOutLibrary/>}/>
          <Route path="/history" element={<SignedOutHistory/>}/>
          <Route path="/search/:input" element={<SearchedResultsPage/>}/>
          <Route path="/watch/:id" element={<WatchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
