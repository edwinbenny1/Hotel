import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Rooms from './pages/Rooms';
import Navbar from './components/AppBar';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;