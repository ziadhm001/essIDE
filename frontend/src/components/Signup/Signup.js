import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';

const Home = () =>{
    const [userName ,setUserName] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmPassword ,setConfirmPassword] = useState('');
    const {signup, isLoading, error , setError} = useSignup();
    const updateUser = event => {
        setUserName(event.target.value);
    }

    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const updateConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const clickHandler = async (event) => {
        event.preventDefault();
        if(confirmPassword === password)
            await signup(userName, password);
        else
            setError('Passwords don\'t match');
    }
    return(
        <div className='body body1'>
            <header className='body1 headerSignup'>
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
                    <p className="welcome-message body1">Please, provide the login credentials for your new account to signup</p> <br/>
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
                        <div className="form-control body1">
                            <input value={confirmPassword} onChange={updateConfirmPassword} className='formIB' type="password" placeholder="Confirm Password"/>
                            <i className="fas fa-lock"></i>
                        </div>
            
                        <button disabled={isLoading} className="submit formIB body1" onClick={clickHandler}>Signup</button>
                        
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Home;