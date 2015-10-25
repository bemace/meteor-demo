Meteor.methods({
		insertContact: function(contact) {
			var user = Meteor.user();

			if (!user)
				throw new Meteor.error(401, "You need to log in before adding contacts");

			contact.owner = user._id;

			return Contacts.insert(contact);
		}
});