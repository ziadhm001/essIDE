import './Home.css';
import Axios from 'axios';
import { useState } from 'react';

const Home = () =>{
    const [userName ,setUserName] = useState('');
    const [password ,setPassword] = useState('');
    const updateUser = event => {
        setUserName(event.target.value);
    }

    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const sendData = async (body) => {
        Axios.post("http://localhost:5000/login",body).then(response=>{
            if(response.data === "OK")
                
        })
    }
    const clickHandler = (event) => {
        event.preventDefault();
        sendData({userName: userName, password: password});
    }
    return(
        <div className='body'>
            <header>
                <a href="/" className="logo">ESS</a>
                    <nav className="navigation">
                        <a href="/services">Courses</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">About us</a>
                    </nav>
            </header>
            <section className="side">
                <img src="./images/img.svg" alt=""/>
            </section>
            <section className="main">
                <div className="login-container">
                    <p className="title">Welcome back to ESS</p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p> 
                    <p className="Signup"> dont have an account ?
                        <span> 
                            <a href="/signup"> Sign up</a>
                        </span>
                    </p>
            
                    <form className="login-form">
                        <div className="form-control">
                            <input value={userName} onChange={updateUser} className='formIB' type="text" placeholder="Username"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input value={password} onChange={updatePassword} className='formIB' type="password" placeholder="Password"/>
                            <i className="fas fa-lock"></i>
                        </div>
            
                        <button className="submit formIB" onClick={clickHandler}>Login</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Home;