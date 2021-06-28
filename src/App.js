import "./App.css";
import "./index.css";
import { useState } from "react";
import ToDolists from "./ToDolists";
import { Button } from "@material-ui/core";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems([...item, inputList]);

    setInputList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="mian_div">
      <div className="center_div">
        <h1>todo list</h1>
        <input
          type="text"
          placeholder="add"
          value={inputList}
          onChange={itemEvent}
        />

        <Button variant="contained" onClick={listOfItems}>
          +
        </Button>

        <ol>{/* <li>{inputList} </li> */}</ol>

        {item.map((itemval, index) => {
          return (
            <ToDolists
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
