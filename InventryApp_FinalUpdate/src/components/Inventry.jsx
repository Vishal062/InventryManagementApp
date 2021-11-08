import { useState } from "react";
import { ButtonList } from "./ButtonFunction";

export const InventryApp = () => {
  const [text, setText] = useState("");

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

  return (
    <div>
      <div className="style1">
        <input
          className="input"
          type="text"
          name="Inventry"
          placeholder="Update your Inventry"
          value={text}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="cbtn" onClick={updateCurrentList}>
          AddToCurrentList
        </button>
        <button className="cbtn1" onClick={updateorderList}>
          AddToOrderList
        </button>
      </div>
      {/* input box Div end here */}
      <div className="a1">
        <ButtonList currentList={currentList} orderList={orderList}>
          {" "}
        </ButtonList>
      </div>
    </div>
  );
};
