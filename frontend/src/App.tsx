import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './loginpage'
import Dashboard from './dashboardpage';
function App() {

  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>      
      </Routes>
    </Router>
    
    
  ) 
}


export default App

