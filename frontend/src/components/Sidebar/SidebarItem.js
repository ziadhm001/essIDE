import './SidebarItem.css';
import { useState } from 'react';

const SidebarItem = props => {
    let [fileText, setFileText] = 
    useState(`/* This is Eliminating Silly Switching Online IDE.
 * We are currently showing contents of ` + props.name + `
 */
   
   
console.log('Hello world, from `+ props.name + `');`);
        const showContent = () =>{
        props.setTextInIDE(fileText);
    }
    switch(props.extension){
        case 'c':
            return(
                    <div className='fileItem' onClick={showContent}> 
                        <img src={require('./c.png')} alt='.c'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        case 'js':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./js.png')} alt='.js' />
                        <span className='fileName'>{props.name}</span>
                    </div>
            );
        case 'cpp':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./cpp.png')} alt='.cpp'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        case 'c#':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./c#.png')} alt='.c#'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        case 'java':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./java.png')} alt='.java'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        case 'php':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./php.png')} alt='.php'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        case 'ruby':
            return(
                    <div className='fileItem' onClick={showContent}>
                        <img src={require('./ruby.png')} alt='.ruby'/>
                        <span className='fileName'>{props.name}</span>
                    </div>
                );
        default:
    }
 
}
export default SidebarItem;