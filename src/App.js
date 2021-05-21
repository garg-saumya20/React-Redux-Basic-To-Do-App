import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { add, dlt, remove } from "./actions/index";
import { useState } from "react";
export default function App() {
  const dispatch = useDispatch();
  const [inputdata, setinputdata] = useState("");
  const list = useSelector((state) => state.ToDoReducer.list);
  return (
    <div className="App">
      <h1>Redux Basic Tutorial</h1>
      <h3>Add your list here....</h3>
      <div className="container">
        <input
          className="inp"
          value={inputdata}
          onChange={(event) => setinputdata(event.target.value)}
          type="text"
          placeholder="Add items"
        />
        <button
          className="inp btn"
          onClick={() => dispatch(add(inputdata), setinputdata(""))}
        >
          Add
        </button>
      </div>
      <div className="remove">
        {list.map((elem) => {
          return (
            <div className="list" key={elem.id}>
              <h3>{elem.data}</h3>
              <button onClick={() => dispatch(dlt(elem.id))} className="btn">
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button classname="btn" onClick={() => dispatch(remove())}>
        Remove All
      </button>
    </div>
  );
}
