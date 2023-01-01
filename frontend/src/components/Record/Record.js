import AceEditor from "react-ace";
import Sidebar from '../Sidebar/Sidebar';
import NavbarRec from '../NavbarRec/NavbarRec';
import Axios from 'axios';
import { useState } from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
const Record = (props) => {
    const [textInIDE, setTextInIDE] = useState(props.defaultVal);
    const [record, setRecord] = useState(false);
    let userActions = [];

    const recordHandler = () => {
        setRecord(true);
        sendData({codeStart: textInIDE})
        const timestamp = Date.now();
        userActions.unshift({action: '1', lines: '2', start: '3', timestamp: timestamp})
        console.log(userActions);
    }
    const doneHandler = () => {
        setRecord(false);
    }
    const sendData = async (body) => {
        Axios.post("http://localhost:5000/record",body);
    }

    const editorChangeHandler= (value,event) => {
        if(record === true)
        {
            const timestamp = Date.now();
            sendData({action: event.action, lines: event.lines, start: event.start, timestamp: timestamp});
            userActions.unshift({action: event.action, lines: event.lines, start: event.start, timestamp: timestamp});
        }
        else
            setTextInIDE(value);
    }

    return(
        <div>
            <NavbarRec recordHandler={recordHandler} doneHandler={doneHandler} />
            <div style={{ display: 'inline-flex', height: '100%' , width: '100%', backgroundColor:'#282c34'}}>
                <Sidebar textInIDE={textInIDE} setTextInIDE={setTextInIDE}/>
                <AceEditor
                    mode="javascript"
                    theme="one_dark"
                    height='100vh'
                    width='200vh'
                    onChange={editorChangeHandler}
                    value={textInIDE}
                    defaultValue= {props.defaultVal}
                    fontSize= {26}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}  
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </div>
    )
}

export default Record;