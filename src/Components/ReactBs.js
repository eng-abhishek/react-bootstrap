import React from "react";
import { Button,Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactBs(){
 return(<>
    <h1>Hello BS</h1>
    <Button>Submit</Button>
    <Button variant="danger" active>Submit</Button>
    <Button variant="success" size='lg'>Submit</Button>
    <Button variant="secondary" size='sm'>Submit</Button>
    <Button variant="warning" href="https://getbootstrap.com/">Submit</Button>
    <Button variant="dark" disabled>Submit</Button>


 <Alert variant="danger">
    <Alert.Heading>
        Add collaborators to this repository
    </Alert.Heading>
    <p>Use GitHub's AI pair programmer to autocomplete suggestions as you code.</p>
   <Alert.Link>
    https://getbootstrap.com/
   </Alert.Link>
 </Alert>

 </>)
}

export default ReactBs;