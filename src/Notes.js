import './Notes.scss';
import React from 'react';
import {Button, Figure, Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Notes(props) {
    let history = useHistory();
    return (
        <div>  
        <h1>Take a note here</h1>
        <hr/>
        { 
        props.notes.map((a, i) => 
             (
                lists(a)
            )
          ) 
          }
        <div className = "publish">
          <input onChange = {(e) => {props.contentChange(e.target.value)}}/>
          <div>
          <Button variant = "info" onClick = {() => {
            var arrayCopy = [...props.notes];
            arrayCopy.unshift(props.content)
            props.changeNotes(arrayCopy)
          }}>save</Button>
          </div>
        </div>
        <Button variant="success" onClick ={()=>{history.goBack()}}>Go Back to main</Button>{' '}
      </div> 
    )
}

function lists(list) {
    return(
        <div>
        <h5>{ list }</h5>
        <p>Committed to Surer</p>
        <hr/>

        </div>
    )
}

export default Notes;