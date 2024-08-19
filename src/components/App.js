import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //Lifting States: This state was lifted from Forms because a sibling component PackingList also needed it. Since data must always flow down the state was taken to the parent component of forms and packing list and passed down to the children to share the state
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    //Filter out items that match the ID and return the rest of the objects as a new array
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (isConfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearListItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
