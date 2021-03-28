import React from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import './MyJumbotron.scss';


function MyJumbotron(props) {
    return(
        <Jumbotron className = 'my-jumbotron' >
          <h1>Hello, Surer!</h1>
          <p>
          Your internship applicant, Jaewon here!
          </p>
          <p>
          <Button variant="primary" onClick = {()=> 
            props.showTab === 1
            ? props.changeShowTab(0)
            : props.changeShowTab(1)
            }>Surer?</Button>
          <Button variant="primary" onClick = {()=>
                    props.showTab === 2
                    ? props.changeShowTab(0)
                    : props.changeShowTab(2)
            }>Jaewon?</Button>
           </p>
       </Jumbotron>
    )
}



export default MyJumbotron;