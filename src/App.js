import './App.scss';
import React, {useState} from 'react';
import MyJumbotron from './MyJumbotron';
import MyNavigation from './MyNavigation';
import {Route} from 'react-router-dom';
import Notes from './Notes';
import Tables from './Tables';

function App() {

  let [notes, changeNotes] = useState(['Hire Jaewon please! :)']);
  let [content, contentChange] = useState('');
  let [showTab, changeShowTab] = useState(0);

  return (
    <div className="App">   

<Route exact path="/"> 
      <MyNavigation/>
      <MyJumbotron showTab = {showTab} changeShowTab = {changeShowTab} content = {content}/>
      <Tables showTab = {showTab}/>
 
  </Route> 

  <Route exact path="/Note"> 
<Notes content = {content} changeNotes = {changeNotes} notes = {notes} changeNotes = {changeNotes} contentChange = {contentChange}/>
  </Route> 

    </div>
  );
}

export default App;
