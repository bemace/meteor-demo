Router.configure({
	layoutTemplate: 'layout',
	// notFoundTemplate: 'notFound',
	// loadingTemplate: 'loading',
});

ContactController = RouteController.extend({
    waitOn: function() {
        return Meteor.subscribe('single-contact', this.params.slug);
    },

    data: function() {
        return Contacts.findOne({ _id: this.params.slug, owner: Meteor.user()._id });
    }
});

Router.map(function() {
	this.route('Home', {
		path: "/",
		template: "contactList",
		// subscriptions: function() {
		// 	return Meteor.subscribe("lazyload-contacts");
		// }
	});

	this.route('Contact', {
		path: '/contact/:slug',
		template: 'contact',
		controller: 'ContactController'
	});
	this.route('Create Contact', {
		path: '/create-contact',
		template: 'editContact',
	});
	this.route('Edit Contact', {
		path: '/edit-contact/:slug',
		template: 'editContact',
		controller: 'ContactController'
	});
});
