import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import { Form } from '../Form/Form';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, ...newContact],
    }));
  };

  isInList = name => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteHandle = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} isInList={this.isInList}/>
        <h2>Contacts</h2>
        <Filter
          name="filter"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          deleteHandle={this.deleteHandle}
        />
      </div>
    );
  }
}
