// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookingForm from './components/layout/BookingForm';
import Featured from './components/layout/Featured';
import Navbar from './components/layout/Navbar';
import Popular from './components/layout/Popular';
import ReviewSection from './components/layout/ReviewSection';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
        <Featured />
        <Popular />
        <BookingForm />
        <ReviewSection />
      </div>
    </Router>
  );
}

export default App;