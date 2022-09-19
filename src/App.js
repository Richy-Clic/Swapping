import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
<<<<<<< HEAD
// import './assets/css/';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
=======
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 782df6364df2571922088f7d4eb75d55fc600c34
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login'
import NewSwapping from './pages/NewSwapping'



function App() {
  
  return (
    
    <BrowserRouter>
<<<<<<< HEAD
    <Header />
    <div className='background-img-custom'>
      <div className='container'>
        <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Login />} />
          <Route path="/newswapping" element={<NewSwapping />} />
        </Routes>
      </div>
    </div>
    <Footer />
=======
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Header />}>
          <Route path="register" element={<Register />}/>
          <Route path="home" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
      <Footer />
>>>>>>> 782df6364df2571922088f7d4eb75d55fc600c34
    </BrowserRouter>
  );
}

export default App;
