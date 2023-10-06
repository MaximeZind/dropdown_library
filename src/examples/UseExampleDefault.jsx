import React from 'react';
import Dropdown from '../lib/Dropdown';
import itemList from './data/list.json';

function UseExampleDefault() {
  
  // Define a callback function to handle selection changes
  function handleDropdownChange(selectedValue) {
    console.log(`Selected Value: ${selectedValue}`);
  }

  return (
    <>
      <h1>Default Dropdown Example</h1>
      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        
        onChange={handleDropdownChange}
      />
    </>
  );
}

export default UseExampleDefault;