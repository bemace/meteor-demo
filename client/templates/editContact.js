Template.editContact.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var form = e.target;
    var user = Meteor.user();
    var _this = this;

    if (this._id) {
      Contacts.update(this._id, { $set: {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
      }}, 
      function(error) {
        if (error)
          alert(error.reason);
        else
          Router.go('Contact', {slug: _this._id});
      });
    }
    else {
      Meteor.call('insertContact', {
        name:      form.name.value,
        email:  form.email.value,
        phone:       form.phone.value,

      }, function(error, newId) {
        Session.set('saveButton', 'Save Contact');

        if(error) {
          return alert(error.reason);
        }

        Router.go('Contact', {slug: newId});
      });

    }
  },
  "click .cancel": function(e, tmpl) {
      e.preventDefault();
      var _this = this;
      Router.go('Contact', {slug: _this._id});
  }
});
