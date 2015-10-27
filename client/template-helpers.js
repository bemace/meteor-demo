  Template.contactList.helpers({
    contacts: function() {
      return Contacts.find({ owner: Meteor.user()._id });
    }
  });

  Template.contact.events({
    "click .edit": function(event) {
      event.preventDefault();
      console.log("edit button pressed");
      Router.go("/edit-contact/");
    },
    "click .delete": function() {
      Contacts.remove(this._id);
    }
  });

