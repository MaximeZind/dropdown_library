import React from 'react';
import Dropdown from '../lib/Dropdown';
import itemList from './data/list.json';

function UseExampleCustomizedColors() {

  const colorPalette = {
    "primaryColor": "#121212",
    "secondaryColor": "#000000",
    "tertiaryColor": "rgb(255,255,255)",
    "quarternaryColor": "rgb(220,220,220)",
    "quinaryColor": "#999",
    "senaryColor": "rgba(68, 68, 68, 0.6)"
  }


  // Define a callback function to handle selection changes
  function handleDropdownChange(selectedValue) {
    console.log(`Selected Value: ${selectedValue}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        backgroundColor: colorPalette.secondaryColor,
        paddingBottom: "300px",
      }}>
      <h1
      style={{
        color: colorPalette.tertiaryColor,
      }}>Dropdown Example with customized colors (here, dark mode)</h1>
      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        searchBar={true}
        separatedBox={true}
        onChange={handleDropdownChange}
        labelColor={colorPalette.quinaryColor}
        focusedLabelColor={colorPalette.tertiaryColor}
        backgroundColor={colorPalette.secondaryColor}
        hoveredBackgroundColor={colorPalette.primaryColor}
        fontColor={colorPalette.tertiaryColor}
        hoveredFontColor={colorPalette.tertiaryColor}
        borderBottomColor={colorPalette.senaryColor}
      />
    </div>
  );
}

export default UseExampleCustomizedColors;