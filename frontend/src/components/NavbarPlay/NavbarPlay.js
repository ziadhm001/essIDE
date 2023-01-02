import './NavbarPlay.css';
const Navbar = props => {
    return(
        <div className='navbar'>
            <span className='navheader'>ESS   /</span>
            <span className='navtitle'>{props.name}</span>
            <button className='btn' style={{marginLeft: '50px'}} onClick={props.playHandler}>Play</button>
        </div>
    );
}

export default Navbar;