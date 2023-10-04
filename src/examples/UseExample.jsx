import React from 'react';
import Dropdown from 'maximez_dropdown';

function UseExample() {
  // Define your list of items
  const itemList = [
    { name: 'Item 1', value: 'item1' },
    { name: 'Item 2', value: 'item2' },
    // Add more items as needed
  ];

  // Define a callback function to handle selection changes
  function handleDropdownChange(selectedValue) {
    console.log(`Selected Value: ${selectedValue}`);
  }

  return (
    <div>
      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        height={40}
        separatedBox={false}
        searchBar={true}     
        onChange={handleDropdownChange}
        // Customize appearance and behavior with additional props
      />
    </div>
  );
}

export default UseExample;