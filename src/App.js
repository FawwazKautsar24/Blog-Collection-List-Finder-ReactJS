import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <div className='brand'>Website Fawwaz</div>
      <nav className='nav-app'>
        <Link to='/' className='nav-app__item'>Home</Link>
        <Link to='/profile' className='nav-app__item'>Profile</Link>
        <Link to='/blog' className='nav-app__item'>Blog</Link>
        <Link to='/contact' className='nav-app__item'>Contact</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
