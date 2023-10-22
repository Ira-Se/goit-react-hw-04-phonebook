import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

 const getInitialContacts = () => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
      }
      return [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ] }

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts)  
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

 const addContact = newContact => {
    const { name } = newContact
    const existingContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (existingContact) {
      return alert (`${newContact.name} is already in contacts`)
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid()}]
    )
  }

  const changeFilter = evt => {
    setFilter(evt.target.value)
  }
 
  const filterContact = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const deleteContactItem = contactId => {
   setContacts(prevState => prevState.filter(contact => contact.id !== contactId))}
    
  const filteredContacts = filterContact();
     
    return <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList items={contacts}
        filteredContacts={filteredContacts}
        onDelete={deleteContactItem } />
     </>
  }