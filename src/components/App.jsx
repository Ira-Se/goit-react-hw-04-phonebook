import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      })
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  addContact = newContact => {
    const { contacts } = this.state
    const { name } = newContact
    const existingContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (existingContact) {
      return alert (`${newContact.name} is already in contacts`)
    }

    this.setState(prevState => ({
    contacts: [...prevState.contacts, { ...newContact, id: nanoid() }]
    }))
  }

  getVisibleItems = () => {
    const { contacts } = this.state
    return contacts
  }
  
  changeFilter = evt => {
    this.setState(
      {filter: evt.target.value}
    )
  }
 
  filterContact = () => {
    const { contacts, filter } = this.state
   return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  deleteContactItem = contactId => {
   this.setState(prevState => (
    {contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    ))
  } 
 
   render() {
     const { filter } = this.state;
     const visibleItems = this.getVisibleItems();
     const filteredContacts = this.filterContact();
     
    return <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter} />
      <ContactList items={visibleItems}
        filteredContacts={filteredContacts}
        onDelete={this.deleteContactItem } />
     </>
  }
}