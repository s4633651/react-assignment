import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { Button, Container } from 'react-bootstrap';


type Props = {};

const ParentComponent = (props: Props) => {

    const [text, setText] =  useState("Hello from parent component");
    const updateText = (value:string) =>{
        setText(value);
    };

  return (
      <Container>
          <div>{ text }</div>
          <ChildComponent sessionNumber='Session One'  updateText={updateText} />
      </Container>
    

    );
};

export default ParentComponent;