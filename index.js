import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './style.css';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));


// const tasks = ['take out the trash', 'shovel the driveway','walk the dog'];
//--------creating elemnt with JSX----------
// const element = 
//   <ol>
//     {tasks.map((task, index) => <li key = {index}> {task}</li>)}
//   </ol>
  //--------creating elemnt without JSX---------
// const element = React.createElement('ol', null,
//  tasks.map((task,index) => React.createElement('li', {key: index}, task))

// );