import './Home.css';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router';
import { useRecordContext } from '../hooks/useRecordContext';
import  RecordItem  from '../RecordItem/RecordItem';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import Axios, { all } from 'axios';
import { useEffect } from 'react';
import { createSearchParams } from 'react-router-dom';
const Home = () => {
    const user = useAuthContext().state;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    const {name, dispatch} = useRecordContext();
    const {logout} = useLogout();
    const [recordName, setRecordName] = useState('');
    const [allowRecord, setAllowRecord] = useState(false);
    const [allowPlay, setAllowPlay] = useState(false);
    const [names,setNames] = useState(null);
    let uniqueNames;
    const playCurrRecord = recordName => {
        navigate({
            pathname: '/play',
            search: createSearchParams({
                name: recordName
            }).toString()
    });
    };
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    const fetchNames = async () => {
        await Axios.post("http://localhost:3001/api/ess/recordNames")
        .then(response => {
            setNames(response.data);
        })
    }

    useEffect(() => {
        fetchNames();
    },[])
    console.log(names);
    if(names)
        uniqueNames = names.filter(unique)

    const navigate = useNavigate();
    const updateRecordName = event => {
        setRecordName(event.target.value)
    }

    const handleClick = () => {
        logout();
    }
    const handlePlayClick = () => {
        setAllowPlay(true);
        setAllowRecord(false);
    }
    const handleRecordClick = () => {
        setAllowRecord(true);
        setAllowPlay(false);
    }

    const handleSubmit = () => {
        dispatch({type:'SET_NAME', payload: recordName});
        navigate('/record');
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
                                <a className='body12' onClick={handleRecordClick}>
                                    <span className="material-symbols-outlined">radio_button_checked</span>
                                    <span className="nav-item body12">Record</span>
                                </a>
                            </li>
                            <li className='body12'>
                                <a className='body12' onClick={handlePlayClick}>
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

            {allowPlay ? uniqueNames.map( (uniqueName,i) => <RecordItem key={uniqueName+i} onClick={playCurrRecord} name={uniqueName.name} id={i+1}/>) : allowPlay}
            {allowRecord && <span style={ {marginLeft: '700px'} }>Record Name</span>}
            {allowRecord && <input style={ {marginLeft: '20px',width: '100px'} } value={recordName} onChange={updateRecordName} type="text"/>}
            {allowRecord && <button style={ {marginLeft: '20px'} } onClick={handleSubmit}>Enter</button>}

    </section>
</div>
    )
}

export default Home;