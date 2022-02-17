import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {};



const OtherPage = (props: Props) => {

  const history = useNavigate();

  const { id } = useParams();
  
  const handleClick = ()=>{
    history('/');
  }

  return (
    <>
      <h1>
        Hello from other page
      </h1>
      <Button onClick={handleClick}>Go Back</Button>
      
    </>
  );
};

export default OtherPage;
