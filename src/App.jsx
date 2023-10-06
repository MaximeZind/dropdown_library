import React from 'react';
import classes from './App.module.css'
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleWithSearchBar from './examples/UseExampleWithSearchBar';
import UseExampleWithSeparatedBox from './examples/UseExampleWithSeparatedBox';
import UseExampleCustomizedColors from './examples/UseExampleCustomizedColors';

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleWithSearchBar/>
      <UseExampleWithSeparatedBox/>
      <UseExampleCustomizedColors/>
    </div>
  )
}

export default App
