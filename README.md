# Dropdown Component

The Dropdown component allows you to create customizable dropdown menus for your React applications.

## Prerequisites

- [react (**version ^18.2.0 or higher**)](https://react.dev/)

## Installation

You can install this component via npm:

`npm install maximez_dropdown`

## Usage

# Import the component

`import { Dropdown } from 'maximez_dropdown';`

# Include the Modal componentn in your JSX

```      <Dropdown
        list={itemList}
        label="Select an item"
        name="dropdownName"
        height={40}
        separatedBox={false}
        searchBar={true}     
        onChange={handleDropdownChange}
        // Il est possible de customizer le composant avec des props
      />
```

# Customiwe the component by passing props

- `list`: An array of items to display in the dropdown.
- `label`: The label associated with the dropdown.
- `name`: The name of the dropdown.
- `errorMsg` (optional): Error message to display in case of issues.
- `separatedBox` (optional): Indicates if the dropdown uses a separated box for options.
- `searchBar` (optional): Indicates if a search bar is displayed to filter options.
- `defaultValue` (optional): The default value selected in the dropdown.
- `defaultName` (optional): The default name selected in the dropdown.
- `onChange` (optional): A callback function called when the selection changes.
- `height`: The height of the dropdown.
- `maxWidth` (optional): The maximum width of the dropdown.
- `labelColor` (optional): Text color of the label.
- `focusedLabelColor` (optional): Text color of the label when the dropdown is open or a value is selected.
- `backgroundColor` (optional): Background color of the dropdown.
- `hoveredBackgroundColor` (optional): Background color when an item is hovered.
- `fontColor` (optional): Text color within the dropdown.
- `hoveredFontColor` (optional): Text color when an item is hovered.
- `fontFamily` (optional): Font family for the text.
- `borderBottomColor` (optional): Color of the bottom border of the dropdown.
- `boxShadowColor` (optional): Color of the dropdown's shadow.
