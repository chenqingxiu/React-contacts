import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'


class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

  state = {
    query: '1'
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  render() {
      return (
        <div className='list-contacts'>
          {JSON.stringify(this.state)}
          <div className='list-contacts-top'>
            <input
              className='search-contacts'
              type='text'
             placeholder='Search contacts'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            <Link
              to='/create'
              className='add-contact'
              > Add Contact </Link>
         </div>
         <ol className='contact-list'>
           {this.props.contacts.map((contact) => (
             <li key={contact.id} className='contact-list-item'>
               <div className='contact-avatar' style={{
                 backgroundImage: `url(${contact.avatarURL})`
               }}/>
               <div className='contact-details'>
                 <p>{contact.name}</p>
                 <p>{contact.email}</p>
               </div>
               <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                 Remove
               </button>
             </li>
           ))}
         </ol>
       </div>
     )
   }

}

export default ListContacts
