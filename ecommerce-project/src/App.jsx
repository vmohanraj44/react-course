import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="CheckOut" element={<div>Test Checkout page</div>} />
    </Routes>
  )
}

export default App
