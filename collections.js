Contacts = new Mongo.Collection("contacts");

if (Meteor.isServer) {
	Contacts.allow({
		insert: function(userId, contact) {
			return userId && contact.owner === userId;
		},
		update: function(userId, contact) {
			return userId && contact.owner === userId;
		},
		remove: function (userId, contact) {
			return userId && contact.owner === userId;
		},
		fetch: ['owner']
	});
}