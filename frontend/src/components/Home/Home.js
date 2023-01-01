import './Home.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {
    const {user} = JSON.parse(localStorage.getItem('user'));
    const {logout} = useLogout();
    const handleClick = () => {
        logout();
    }

    return(
        <div className='body12 bodyHome'>
            <header className='headerHome body12'>
                <a href="/home" className="logoheader body12">ESS</a>
                <nav className="navigation body12">
                </nav>
            </header>
            <section className='body12'>
                <aside className='body12'>  
                    <nav className="AsideHome body12">
                        <ul className='body12'>
                            <li className='body12'>
                                <a className='body12' href="/home">
                                <span className="material-symbols-outlined">home</span>
                                <span className="nav-item body12">Home</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' href="/record">
                                    <span className="material-symbols-outlined">radio_button_checked</span>
                                    <span className="nav-item body12">Record</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' href="/play">
                                    <span className="material-symbols-outlined">laptop_chromebook</span>
                                    <span className="nav-item body12">Courses</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' href="/home">
                                    <span className="material-symbols-outlined">checklist</span>
                                    <span className="nav-item body12">Task</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' href="/home">
                                    <span className="material-symbols-outlined">settings</span> 
                                    <span className="nav-item body12">Settings</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' href="/home">
                                    <span className="material-symbols-outlined">help</span>
                                    <span className="nav-item body12">Help</span>
                                </a>
                            </li>
                            <li>
                                <a href='/' onClick={handleClick} className="logout body12">
                                    <span className="material-symbols-outlined">logout</span>
                                    <span className="nav-item body12">Log out</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
            </aside>
    </section>
</div>
    )
}

export default Home;