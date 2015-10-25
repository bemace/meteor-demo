if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.contactList.helpers({
    contacts: function() {
      return [
        { name: 'John Doe', email: 'johndoe@gmail.com', phone: '320-555-1234' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com', phone: '320-555-4321' },
      ];
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
