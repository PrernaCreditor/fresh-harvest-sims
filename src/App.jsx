import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Financials from './pages/Financials';
import StaffPerformance from './pages/StaffPerformance';
import Risks from './pages/Risks';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="financial" element={<Financials />} />
          <Route path="staff" element={<StaffPerformance />} />
          <Route path="risks" element={<Risks />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
