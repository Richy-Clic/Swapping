import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login'



function App() {
  
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Header />}>
          <Route path="register" element={<Register />}/>
          <Route path="home" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
