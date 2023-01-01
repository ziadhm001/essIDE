import AceEditor from "react-ace";
import Sidebar from '../Sidebar/Sidebar';
import NavbarPlay from '../NavbarPlay/NavbarPlay';
import Axios from 'axios';
import { useState } from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import { useEffect } from "react";
const Play = (props) => {
  const [isLoading, setLoading] = useState(true); // Loading state
  const [textInIDE, setTextInIDE] = useState(props.defaultVal);
  const [recordText, setRecordText] = useState(props.defaultVal);
  const [userActions, setUserActions] = useState([]);
  let counter = 0;
  const sendData = async (body) => {
      await Axios.post("http://localhost:3001/api/ess/play",body).then(response=>{
      setRecordText(response.data[0].codeStart);
      console.log("Code start ready!");
      })
      await Axios.post("http://localhost:3001/api/ess/playData",body).then(response=>{
      setUserActions(response.data);
      console.log("Record ready!");
      setLoading(false);
      }) 
}
  
  useEffect(() => {
    sendData();
  }, [])
  const playHandler = () => {
    setTextInIDE(recordText);
    let lines = recordText.split('\n');
    const playRecursive = () => {
      setTimeout(()=>{
        lines[userActions[counter]['start'].row] = lines[userActions[counter]['start'].row].slice(0,userActions[counter]['start'].column) + userActions[counter]['lines'] + lines[userActions[counter]['start'].row].slice(userActions[counter]['start'].column);
        lines = lines.join('\n');
        setTextInIDE(lines);
        lines = lines.split('\n')
        counter++;
        if(counter !== userActions.length)
          playRecursive();
      },userActions[counter+1].timestamp - userActions[counter].timestamp);
    }
    playRecursive();
  }
  const editorChangeHandler= (value,event) => {
      console.log(userActions)
  }
    if (isLoading) {
      return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data {console.log("loading state")}</div>
      );
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
              defaultValue= {recordText}
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