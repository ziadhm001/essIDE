import './NavbarRec.css';
const Navbar = props => {
    return(
        <div className='navbar'>
            <span className='navheader'>ESS   /</span>
            <span className='navtitle'>{props.name}</span>
            <button className='btn' style={{marginLeft:'50px'}} onClick={props.recordHandler}>Record</button>
            <button className='btn' style={{marginLeft:'10px'}} onClick={props.doneHandler}>Done</button>
        </div>
    );
}

export default Navbar;