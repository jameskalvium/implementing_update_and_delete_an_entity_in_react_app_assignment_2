import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} setItems={setItems} />
      ))}
    </>
  );
};

export default ItemList;
