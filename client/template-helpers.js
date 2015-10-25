  Template.contactList.helpers({
    contacts: function() {
      return Contacts.find({ owner: Meteor.user()._id });
    }
  });

