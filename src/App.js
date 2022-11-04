import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// import './assets/css/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login';


function App() {
  
  return (
    
    <BrowserRouter>
    <Header />
    <div className='background-img-custom'>
      <div className='container'>
        <Routes>
          <Route path="/register" element={<Profile />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
