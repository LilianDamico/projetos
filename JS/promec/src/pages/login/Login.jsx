import React from 'react';
import './Login.css';
import Head from '../../components/head/Head';
import LoginForm from '../../components/loginform/LoginForm';
import Footer from '../../components/footer/Footer';


const Login = () => {
  return (
    <div>
      <Head />
      
      <div className='conteudo'>

        <LoginForm />
      
      </div>
      <Footer />
    </div>
  )
}

export default Login;
