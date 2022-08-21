import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from  './pages/Home';
import Accounts from './pages/Accounts';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<Accounts />} />
     </Routes>

    </AuthContextProvider>
    
    </>
  );
}

export default App;
