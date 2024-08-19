import { useState } from "react";
import Item from "C:/Users/loic.yatou/OneDrive - Diligencia Consulting Ltd/Documents/React Course/05-travel-list/travel-list/src/components/Item.js";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearListItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      //Sorts the array in alphabetical order according to description
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      //Sorts the array in order according to truthy value
      .sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            item={items}
            key={items.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={() => onClearListItems()}>Clear list</button>
      </div>
    </div>
  );
}
