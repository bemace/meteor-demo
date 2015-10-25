Meteor.startup(function() {
	console.log("Server Started");
	if (Contacts.find().count() == 0) {
		console.log("Adding default contacts");
		var dummyContacts = [
			{ name: 'John Doe', email: 'johndoe@gmail.com', phone: '320-555-1234' },
        	{ name: 'Jane Doe', email: 'janedoe@gmail.com', phone: '320-555-4321' },
        	{ name: 'TV\'s Frank', email: 'frank@mst3k.tv', phone: '320-555-9999' },
		];
		_.each(dummyContacts, function(contact) {
			Contacts.insert(contact);
		});
	}
});