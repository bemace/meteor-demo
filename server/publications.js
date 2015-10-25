Meteor.publish("single-contact", function(slug) {
	return Contacts.find({slug: slug});
});