import React from 'react';
import { Container, Table } from 'react-bootstrap';

type Props = {
    userData: any,
    setRowNum: (rn:any )=>void,
    setDisplay: (disp: boolean)=>void
};

const PopUp = (props: Props) => {

    const { userData, setRowNum, setDisplay } = props;

    const updateRow = (rn:number, disp:boolean) =>{
        setRowNum(rn);
        setDisplay(disp);
    }
  
  return (
    <>
    <Container className='mt-3'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                { userData?(
                      userData.map( (value:any, key:number) =>(
                        <tr key={key} >
                            <td>{ value.name }</td>
                            <td>{ value.age }</td>
                            <td>{ value.address }</td>
                            <td>
                                <button onClick={ ()=> updateRow(value.key, true) } className="btn-warning btn-sm me-1">Edit</button>
                                <button onClick={ ()=>console.log(` Deleted row index : ${value.key} `) } className="btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                      ) 
                      
                    ) 
                
                ) : null }
                <tr>

                </tr>
            </tbody>


        </Table>
    </Container>
    </>
    );
};


export default PopUp;