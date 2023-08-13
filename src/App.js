import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import React, { useState } from "react";

function App() {
  const [fullTravelList, setFullTravelList] = useState([]);

  function addItemInFullList(newItem) {
    setFullTravelList((oldItems) => [...oldItems, newItem]);
  }

  function deleteItemFromFullList(itemId) {
    setFullTravelList((oldItems) =>
      oldItems.filter((item) => item.id !== itemId)
    );
  }

  function clearAllItemsFromFullList(itemId) {
    setFullTravelList([]);
  }

  function handleChangeInCheckBox(itemId) {
    setFullTravelList((oldItems) =>
      oldItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form takeAddItemFunction={addItemInFullList} />
      <PackingList
        fullList={fullTravelList}
        deleteItemFromFullList={deleteItemFromFullList}
        handleChangeInCheckBox={handleChangeInCheckBox}
        clearAllItemsFromFullList={clearAllItemsFromFullList}
      />
      <Stats fullList={fullTravelList} />
    </div>
  );
}

export default App;
