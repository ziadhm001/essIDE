import './NavbarPlay.css';
const Navbar = props => {
    return(
        <div className='navbar'>
            <span className='navheader'>ESS   /</span>
            <span className='navtitle'>Untitled Record</span>
            <button onClick={props.playHandler}>Play</button>
        </div>
    );
}

export default Navbar;