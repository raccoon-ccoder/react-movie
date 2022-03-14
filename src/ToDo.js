import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  }
  console.log("rendered");
  // // 1) 직접 해당 li 태그를 찾아서 삭제하는 방법
  // const deleteBtn = (event) => {
  //   // const li = event.target.parentElement;
  //   // li.remove();
  // }

  // 2. setToDos 를 이용해 li 태그 제거
  const deleteBtn = (index) => setToDos(toDos.filter((item, todoIdx) => index !== todoIdx));

  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, idx)=> 
          <li key={idx}>
            {item}
            <button onClick={() => deleteBtn(idx)}>Delete!</button>
          </li>
          )}
      </ul>
    </div>
  );
}

// export default App;
