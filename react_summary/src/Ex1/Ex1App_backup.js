import React,{Fragment} from 'react';
import Sample1 from './Ex1/sample1'
import Sample2 from './Ex1/Sample2'

function App() {
  return (
    <Fragment>
      <div>
        <h5> App.js </h5>
        <Sample1 title='A1'></Sample1>
        <Sample2></Sample2>
        <Sample2></Sample2>
      </div>
    </Fragment>
  );
}

export default App;
