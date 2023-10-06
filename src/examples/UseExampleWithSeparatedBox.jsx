import React from 'react';
import Dropdown from '../lib/Dropdown';
import itemList from './data/list.json';

function UseExampleWithSeparatedBox() {
  
  // Define a callback function to handle selection changes
  function handleDropdownChange(selectedValue) {
    console.log(`Selected Value: ${selectedValue}`);
  }

  return (
    <>
      <h1>Dropdown Example with separated options box</h1>
      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        searchBar={true}
        separatedBox={true}
        onChange={handleDropdownChange}
      />
    </>
  );
}

export default UseExampleWithSeparatedBox;