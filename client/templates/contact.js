Template.contact.events({
	"click .delete-contact": function() {
		Contacts.remove(this._id);
		Router.go('/');
	}
});