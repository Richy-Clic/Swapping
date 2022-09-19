import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// import './assets/css/';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx'
import { Home } from './pages/Home.jsx';
import Login from './pages/Login'
import NewSwapping from './pages/NewSwapping'




function App() {

  
const params = useParams()
console.log(params);
  return (
    
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
