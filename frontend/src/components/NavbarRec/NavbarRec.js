import './NavbarRec.css';
const Navbar = props => {
    return(
        <div className='navbar'>
            <span className='navheader'>ESS   /</span>
            <span className='navtitle'>Untitled Record</span>
            <button onClick={props.recordHandler}>Record</button>
            <button onClick={props.doneHandler}>Done</button>
        </div>
    );
}

export default Navbar;