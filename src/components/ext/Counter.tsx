import React, { useState } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';

type Props = {};

const Counter = (props: Props) => {

    const [count, setState] = useState(0);
    const [name, setName] = useState('');

  return (
    <>
    <Container>
        <input type='text' onChange={ event => setName(event.target.value) } />
        <Badge className='m-2' bg='warning'> {name} has clicked {count} times! </Badge>
        <Button onClick={ ()=>setState(count+1) } >Increase</Button>
    </Container>
    </>
    );
};



export default Counter;
