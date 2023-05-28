import React, {Component} from "react";
class ContactList extends Component{
    
 findContacts = () => {
     const  сontactMatches= this.props.contacts.filter(({name})=>(name.toUpperCase().includes(this.props.filter.toUpperCase())))
   return сontactMatches
  }

    render() {
        return (
            <ul >
                {this.findContacts().map(({ id, name, number })=>{
                    return <li key={id}>{name}: { number}</li>
                })}
            </ul>
        )
    }
}

export default ContactList