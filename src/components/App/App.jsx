
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { AppContainer,ApiTitleH1, ApiTitleH2 } from './App.styled';
class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }
  


  onSubmit = ({ id, name, number }) => {
    this.setState({ contacts: [...this.state.contacts, { id, number, name }] })
  }
  

  handleCnangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

 deleteContact = (idContact) => {
    this.setState((prevState)=>({ contacts: prevState.contacts.filter(({id})=>id!==idContact)}))
  }


  render() {
    return (
      <AppContainer>
         <ApiTitleH1>Phonebook</ApiTitleH1>
        <ContactForm onSubmit={this.onSubmit} contacts={ this.state.contacts} />
         <ApiTitleH2>Contacts</ApiTitleH2>
         <Filter  onChangeFilter={this.handleCnangeFilter}  />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onDeleteContact={this.deleteContact} />
      </AppContainer>
    )
  }
}

export default App
