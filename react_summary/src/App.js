import React,{Fragment} from 'react';
import Sample1 from './Ex1/sample1'
import Sample2 from './Ex1/Sample2'
import Ex2 from './Ex2'
import Todo from './Ex3'

function App() {
  return (
    <Fragment>
      <div>
        <h2> Ex1 </h2>
        <Sample1 title='A1'></Sample1>
        <Sample2></Sample2>
        <Sample2></Sample2>
      </div>
      <hr></hr>
      <div>
        <h2> Ex2 </h2>
        <Ex2></Ex2>
      </div>
      <hr></hr>
      <div>
        <h2> Ex3 - SimpleTODO</h2>
        <Todo></Todo>
      </div>
    </Fragment>
  );
}

export default App;
