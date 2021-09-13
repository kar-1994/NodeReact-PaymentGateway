import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/cart" exact component={CartPage}></Route>
        <Route path="/register" exact component={RegisterPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
