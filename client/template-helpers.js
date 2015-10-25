if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.contactList.helpers({
    contacts: function() {
      return Contacts.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
