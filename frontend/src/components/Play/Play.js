import AceEditor from "react-ace";
import Sidebar from '../Sidebar/Sidebar';
import NavbarPlay from '../NavbarPlay/NavbarPlay';
import Axios from 'axios';
import { useState } from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
const Play = (props) => {
  const sendData = async (body) => {
      Axios.post("http://localhost:5000/play",body).then(response=>{
      setRecordText(response.data[0].codeStart);
      setUserActions(response.data);
    })
}
  sendData()
  const [textInIDE, setTextInIDE] = useState(props.defaultVal);
  const [recordText, setRecordText] = useState(props.defaultVal);
  let [userActions, setUserActions] = useState([]);
  let counter = 0;

  const playHandler = () => {
    setTextInIDE(recordText);
    let lines = recordText.split('\n');
    const playRecursive = () => {
      setTimeout(()=>{
        counter++;
        lines[userActions[counter]['start'].row] = lines[userActions[counter]['start'].row].slice(0,userActions[counter]['start'].column) + userActions[counter]['lines'] + lines[userActions[counter]['start'].row].slice(userActions[counter]['start'].column);
        lines = lines.join('\n');
        setTextInIDE(lines);
        lines = lines.split('\n')
        if(counter !== userActions.length)
          playRecursive();
      },userActions[counter+1].timestamp - userActions[counter].timestamp);
    }
    playRecursive();
  }
  const editorChangeHandler= (value,event) => {
      console.log(userActions)
  }
    return(
        <div>
            <NavbarPlay playHandler={playHandler} />
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

export default Play;