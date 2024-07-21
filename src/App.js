import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletSearch from './components/WalletSearch';
import WalletPreview from './components/WalletPreview';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<WalletSearch />} />
                    <Route path="/wallet/:publicKey" element={<WalletPreview />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
