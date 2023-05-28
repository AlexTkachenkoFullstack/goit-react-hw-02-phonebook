
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { AppContainer } from './App.styled';
class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
}

  onSubmit = ({ id, name, number }) => {
    this.state.contacts.find(item => item.name !== name)
      ? this.setState({ contacts: [...this.state.contacts, { id, number, name }] })
      : console.log('rrrrrrrrrrrrr')
  }
  
  handleCnangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }


  render() {
    return (
      <AppContainer>
         <h1>Phonebook</h1>
         <ContactForm onSubmit={this.onSubmit}/>
         <h2>Contacts</h2>
         <Filter  onChangeFilter={this.handleCnangeFilter}  />
         <ContactList contacts={this.state.contacts} filter={this.state.filter}/>
      </AppContainer>
    )
  }
}

export default App
