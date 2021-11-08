export const ListItems = ({ el }) => {
  const handleAdd = (e) => {
    e.target.innerHTML = "Updated";
    e.target.setAttribute("class", "updated");
  };
  return (
    <div className="list1">
      <p>{el}</p>
      <button className="btn1" onClick={handleAdd}>
        Update
      </button>
    </div>
  );
};
