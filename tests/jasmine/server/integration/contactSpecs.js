"use strict"

describe('Contact', function() {
	it("cannot be created without an owner", function() {
		expect(function() { Contacts.insert({ name: 'Somebody', email: 'someone@example.com'}); }).toThrow;
	});
})