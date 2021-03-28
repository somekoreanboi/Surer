import React from 'react';
import {Nav, Card} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './MyNavigation.scss';

function MyNavigation() {
    return (
        <Card className='myNavigation'>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" bg="dark">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to ="/Note">Note</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
      </Card>

      
    )
    
    
}

export default MyNavigation;