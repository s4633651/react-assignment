import React from 'react';
import { Container } from 'react-bootstrap';
import PropsTypes from 'prop-types';

type Props = { 
  sessionName:string, 
  sessionNumber:string, 
  updateText : (value:string)=>void,
};

const ChildComponent = (props: Props) => {
  return (
      <Container>
          <button onClick={ () => props.updateText("Child component says hello") } >Click me</button>
      </Container>
  );
};

ChildComponent.PropsTypes = {
    sessionName : PropsTypes.string.isRequired, 
    sessionNumber : PropsTypes.string,
}

ChildComponent.defaultProps = {
    sessionName: "02/02/02"
}

export default ChildComponent;
