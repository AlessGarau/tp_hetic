import './App.css'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import DocumentsPage from './pages/Documents';
import CustomerPage from './pages/customers';
import QuoteForm from './pages/Documents/components/quoteForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocumentsPage />} />
        <Route path="/createPdf" element={<QuoteForm />} />
        <Route path="/customers" element={<CustomerPage />} />
      </Routes>
    </Router>
  )
}

export default App