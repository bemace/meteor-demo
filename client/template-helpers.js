  Template.contactList.helpers({
    contacts: function() {
      return Contacts.find();
    }
  });

  