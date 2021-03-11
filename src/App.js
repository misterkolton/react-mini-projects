import React, { useState } from "react"
import './App.css';

import Toggle from './components/toggle';
import Form from "./components/form";
import CommentList from "./components/commentList";
import GetPicsom from "./loremPicsum"


function App() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const [ isToggled, setIsToggled] = useState(false)
  const [photo, setPhoto] = useState({})
  
  return (
    <div className="App">
     <Toggle 
     isToggled = {isToggled}
     setIsToggled = {setIsToggled}
     />
    
     <Form 
      comments = {comments}
      setComments = {setComments}
      setInputText={setInputText} 
      inputText ={inputText}
     />
     <CommentList 
        setComments={setComments} 
        comments={comments} 
      />

      <GetPicsom
        photo= {photo}
        setPhoto = {setPhoto}
      />
      
    </div>
    
  );
}

export default App;
