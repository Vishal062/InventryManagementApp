import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ListItems } from "./ListData";

export const ButtonList = ({ currentList, orderList }) => {
  const [buttonFunction, setButtonFunction] = useState(0);

  if (buttonFunction === 0) {
    return (
      <>
        <button onclick={() => setButtonFunction(1)}>CURRENTLIST</button>
        {currentList.map((el) => {
          return <ListItems key={uuid()} el={el}></ListItems>;
        })}
      </>
    );
  }

  if (buttonFunction === 1) {
    return (
      <>
        <button onClick={() => setButtonFunction(0)}>ORDERLIST</button>
        {orderList.map((el) => {
          return <ListItems key={uuid()} el={el}></ListItems>;
        })}
      </>
    );
  }
};
