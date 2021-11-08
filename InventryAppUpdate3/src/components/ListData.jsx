export const ListItems = ({ el }) => {
  const handleAdd = (e) => {
    e.target.innerHTML = "Updated";
    e.target.setAttribute("class", "updated");
  };
  return (
    <div>
      <p>{el}</p>
      <button onClick={handleAdd}>Update</button>
    </div>
  );
};
