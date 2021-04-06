import React, { useState } from "react";
import "./App.css";
import Toggle from "./components/toggle";
import Form from "./components/form";
import CommentList from "./components/commentList";

function App() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="App">
      <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />

      <Form
        comments={comments}
        setComments={setComments}
        setInputText={setInputText}
        inputText={inputText}
      />
      <CommentList setComments={setComments} comments={comments} />
    </div>
  );
}

export default App;
