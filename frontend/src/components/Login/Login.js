import './Login.css';
import {useLogin} from '../hooks/useLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Login = () =>{
    let navigate = useNavigate();
    const [userName ,setUserName] = useState('');
    const [password ,setPassword] = useState('');
    const {login, isLoading, error} = useLogin();
    const updateUser = event => {
        setUserName(event.target.value);
    }

    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const clickHandler = async (event) => {
        event.preventDefault();
        await login(userName, password)
        .then(()=>{
            navigate('/home');
        });
    }
    return(
        <div className='body body1'>
            <header className='body1 headerLogin'>
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
                    <p className="title body1">Welcome to ESS</p>
                    <div className="separator body1"></div>
                    <p className="welcome-message body1">Please, provide login credential to proceed and have access to all our services</p> 
                    <p className="Signup body1"> dont have an account ?
                        <span className='body1'> 
                            <a className='body1' href="/signup"> Sign up</a>
                        </span>
                    </p>
            
                    <form className="login-form body1">
                        {error && <div className='error'>{error}</div>}
                        <div className="form-control body1">
                            <input value={userName} onChange={updateUser} className='formIB fromIT' type="text" placeholder="Username"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control body1">
                            <input value={password} onChange={updatePassword} className='formIB' type="password" placeholder="Password"/>
                            <i className="fas fa-lock"></i>
                        </div>
            
                        <button disabled={isLoading} className="submit formIB body1" onClick={clickHandler}>Login</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Login;