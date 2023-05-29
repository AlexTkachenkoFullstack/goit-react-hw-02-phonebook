import React, { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton } from "./ContactForm.styled";
class ContactForm extends Component{
    state = {
         name: '',
        number: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const contactId = nanoid()
        if (this.props.contacts.some(item => item.name === event.target.name.value)) {
            alert(`${event.target.name.value} is already in contacts`)
            return
        }  
           this.props.onSubmit({ ...this.state, id: contactId })
            event.target.name.value = ''
            event.target.number.value=''
            this.reset()   
    }
    
     reset = () => {
    this.setState({
      name: '',
      number: ''
   })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    }
    
    render() {
        return (<FormContainer onSubmit={this.handleSubmit}>
                    <FormLabelName htmlFor="name">Name</FormLabelName>
                    <FormInputName
                        type="text"
                        id="name"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}/>
                    <FormLabelName htmlFor="number">Number</FormLabelName>
                    <FormInputTel
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleChange}
                        required />
                    <FormButton type='submit'>Add contact</FormButton>
                </FormContainer>)
}
}

export default ContactForm

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
    ),
    onSubmit:PropTypes.func.isRequired
}