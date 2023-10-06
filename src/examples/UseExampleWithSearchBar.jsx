import React from 'react';
import Dropdown from '../lib/Dropdown';
import itemList from './data/list.json';

function UseExampleWithSearchBar() {
  
  // Define a callback function to handle selection changes
  function handleDropdownChange(selectedValue) {
    console.log(`Selected Value: ${selectedValue}`);
  }

  return (
    <>
      <h1>Dropdown Example with searchbar</h1>
      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        searchBar={true}
        onChange={handleDropdownChange}
      />
    </>
  );
}

export default UseExampleWithSearchBar;