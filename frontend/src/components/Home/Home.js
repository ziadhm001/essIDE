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
        Axios.post("http://localhost:3001/api/user/login",body).then(response=>{
            if(response.data === "OK")
                console.log(response.data);
            else
                console.log(response.data);

        })
    }
    const clickHandler = (event) => {
        event.preventDefault();
        console.log(userName,password);
    }
    return(
        <div className='body body1'>
            <header className='body1'>
                <a href="/" className="logo body1">ESS</a>
                    <nav className="navigation body1">
                        <a href="/services">Courses</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">About us</a>
                    </nav>
            </header>
            <section className="side body1">
                <img src="./images/img.svg" alt=""/>
            </section>
            <section className="main body1">
                <div className="login-container body1">
                    <p className="title body1">Welcome back to ESS</p>
                    <div className="separator body1"></div>
                    <p className="welcome-message body1">Please, provide login credential to proceed and have access to all our services</p> 
                    <p className="Signup body1"> dont have an account ?
                        <span className='body1'> 
                            <a className='body1' href="/signup"> Sign up</a>
                        </span>
                    </p>
            
                    <form className="login-form body1">
                        <div className="form-control body1">
                            <input value={userName} onChange={updateUser} className='formIB fromIT' type="text" placeholder="Username"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control body1">
                            <input value={password} onChange={updatePassword} className='formIB' type="password" placeholder="Password"/>
                            <i className="fas fa-lock"></i>
                        </div>
            
                        <button className="submit formIB body1" onClick={clickHandler}>Login</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Home;