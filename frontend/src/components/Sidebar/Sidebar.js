import './Sidebar.css';
import SidebarItem from './SidebarItem';
const Sidebar = props => {
    return(
        <div className='sidebar'>
            <p>Explorer</p>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='c' name='main.c'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='c#' name='applet.cs'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='c#' name='applets.cs'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='cpp' name='record.cpp'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='java' name='playback.java'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='ruby' name='speed.r'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='php' name='tailor.php'/>
            <SidebarItem textInIDE={props.textInIDE} setTextInIDE= {props.setTextInIDE} extension='c#' name='applet.cs'/>
        </div>
    )
}

export default Sidebar;