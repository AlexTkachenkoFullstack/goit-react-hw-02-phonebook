import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton } from "./ContactForm.styled";
class ContactForm extends Component{
    state = {
         name: '',
        number: '',
    }

    handleSubmit = (event) => {
    event.preventDefault()
    const contactId = nanoid()
   this.props.onSubmit({...this.state, id: contactId})
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