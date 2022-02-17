import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EditContact from './EditContact';

import api from '../../api'


type Props = {};

const HomePage = (props: Props) => {

  const [contactsTable, setContactsTable] = useState<any[]>([
    {
      "id": "111",
      "fName": "Nip",
      "lName": "una",
      "number": 4444444
    },
    {
      "id": "222",
      "fName": "Rav",
      "lName": "indu",
      "number": 222222
    },
    {
      "id": "333",
      "fName": "May",
      "lName": "umi",
      "number": 888888
    },
    {
      "fName": "ssss",
      "lName": "aaaa",
      "number": 1111,
      "id": "Ujg_nUj"
    }
  ]);
  const [visibility, setVisibility] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [index, setIndex] = useState(0);




  const contactHandler = async (contact: any)=>{
    setContactsTable(contactsTable.concat( contact ));

  };

  const deleteContact = (index: number)=>{
    const newContactsTabel = contactsTable.filter( (cont:any, i:number)=>i!==index );
    setContactsTable(newContactsTabel);
  };

  const editContactBtn = (contact:any, index:number)=>{
    setVisibility(true);
    setSelectedContact(contact);
    //extracting index when edit button is clicked, to be used in updateContact funtion
    setIndex(index);
  }
  

  const updateContact = (con:any) =>{
    let updatedItem = con;
    let list = contactsTable;

    console.log(index);
    list[index] = updatedItem;
    setVisibility(false);
  }

  return (
      <>
       { visibility? (<EditContact setVisibility={ setVisibility } selectedContact={selectedContact} updateContact = {updateContact}  />) : null }
        <ContactForm contactHandler = { contactHandler } />
        <ContactList contactsTable = { contactsTable } deleteContact={ deleteContact } editContactBtn={ editContactBtn } />
      </>
  );
};

export default HomePage;
