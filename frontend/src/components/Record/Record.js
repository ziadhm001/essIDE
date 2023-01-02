import AceEditor from "react-ace";
import Sidebar from '../Sidebar/Sidebar';
import NavbarRec from '../NavbarRec/NavbarRec';
import Axios from 'axios';
import { useRecordContext } from "../hooks/useRecordContext"
import { useState } from 'react';
import { useNavigate } from "react-router";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import { useEffect } from "react";
const Record = (props) => {
    const [textInIDE, setTextInIDE] = useState(props.defaultVal);
    const [record, setRecord] = useState(false);
    let userActions = [];
    const navigate = useNavigate();
    Axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    const {state} = useRecordContext();
    useEffect(() => {
        if(state.name === 'default')
        {
            navigate('/home');
        } 
    })
    const recordHandler = () => {
        setRecord(true);
        sendState({codeStart: textInIDE, name:state.name})
        const timestamp = Date.now();
        console.log(userActions);
    }

    const sendState = async (body) => {
        await Axios.post("http://localhost:3001/api/ess/recordState",body);
    }

    const sendData = async (body) => {
        Axios.post("http://localhost:3001/api/ess/record",body);
    }

    const doneHandler = () => {
        sendData({action: "end", lines: [], start: {}, timestamp: 0, name:state.name});
        setTimeout(navigate('/home'),500);
    }
    const editorChangeHandler= (value,event) => {
        if(record === true)
        {
            const timestamp = Date.now();
            sendData({action: event.action, lines: event.lines, start: event.start, timestamp: timestamp, name:state.name});
            userActions.unshift({action: event.action, lines: event.lines, start: event.start, timestamp: timestamp, name: state.name});
        }
        else
            setTextInIDE(value);
    }

    return(
        <div>
            <NavbarRec name={state.name} recordHandler={recordHandler} doneHandler={doneHandler} />
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