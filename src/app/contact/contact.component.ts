import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  first_name: String;
  last_name: String;
  email: String;


  constructor(private contactService: ContactService) { }

  addContact() {

    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email
    };
    /*if (newContact.first_name.length === 0 || newContact.last_name.length === 0 || newContact.email.length === 0) {
      alert('Entries reqiured');
    }*/

    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
      this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);

    });
  }

  deleteContact(id: any) {
    const contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe(data => {

          for (let i = 0; i < contacts.length ; i++) {
            if (contacts[i]._id === id) {
              contacts.splice(i, 1);
            }

        }

    });
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

}
