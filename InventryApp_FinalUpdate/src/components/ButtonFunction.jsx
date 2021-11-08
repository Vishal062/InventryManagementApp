import { ListItems } from "./ListData";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ButtonList = ({ currentList, orderList }) => {
  const [buttonFunction, setButtonFunction] = useState(0);

  if (buttonFunction === 0) {
    return (
      <>
        <button className="mbtn1" onClick={() => setButtonFunction(1)}>
          CURRENTLIST
        </button>
        {currentList.map((el) => {
          return <ListItems key={uuid()} el={el}></ListItems>;
        })}
      </>
    );
  }

  if (buttonFunction === 1) {
    return (
      <>
        <button className="mbtn2" onClick={() => setButtonFunction(0)}>
          ORDERLIST
        </button>
        {orderList.map((el) => {
          return <ListItems key={uuid()} el={el}></ListItems>;
        })}
      </>
    );
  }
};
