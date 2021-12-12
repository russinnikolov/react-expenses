import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import RegisterPage from './components/register/RegisterPage';
import LoginPage from './components/login/LoginPage';
import About from './components/about/About';
import ExpensesPage from './components/expenses/ExpensesPage';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <Router>
      <App />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='about' element={<About />} />
            <Route path='expenses' element={<ExpensesPage />} />
            <Route path='login' element={<LoginPage />} />
      </Routes>
      <Footer />
  </Router>,
  document.getElementById('app')
);
