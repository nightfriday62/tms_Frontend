import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Shipments from './pages/Shipments';
import RoutesPage from './pages/Routes';
import Settings from './pages/Settings';
import ShippingUnits from './pages/ShippingUnits';
import './App.css';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shipping-units" element={<ShippingUnits />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

