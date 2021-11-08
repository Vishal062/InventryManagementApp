import {useState} from "react";
import {ButtonList} from "./ButtonFunction";

export const InventryApp = () => {
  const [text,setText] = useState("");


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [currentList] = useState([]);
  const [orderList] = useState([]);

  const updateCurrentList = () => {
    currentList.push(text);
    setText("");
  };

  const updateorderList = () => {
    orderList.push(text);
    setText("");
  };

  return(
    <div> 
      <div>
        <input 
        type="text"
        name="Inventry"
        placeholder="Update your Inventry"
        value={text}
        onChange={handleChange}
        />
        <button 
        onClick={updateCurrentList}>UpdateCurrentList</button>
        <button 
        onClick={updateorderList}>UpdateOrderList</button>
      </div>
{/* input box Div end here */}
      <div>
        <ButtonList currentList={currentList} orderList={orderList}>
          {" "}
        </ButtonList>
      </div>
    </div>
  );
};