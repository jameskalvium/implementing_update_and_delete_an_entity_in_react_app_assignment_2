const Item = ({ item, setItems }) => {
    const handleDelete = async () => {
      try {
        await fetch(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, {
          method: "DELETE",
        });
  
        setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };
  
    return (
      <div>
        <span>{item.name}</span>
        <button onClick={handleDelete}>Delete</button>
        <button>Edit</button>
      </div>
    );
  };
  
  export default Item;
  