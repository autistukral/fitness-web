import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rezervace from "./components/Rezervace";
import Galerie from "./components/Galerie";
import Account from "./components/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rezervace' element={<Rezervace />} />
        <Route path='/galerie' element={<Galerie />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/account' element={<Account />} />
        </Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
