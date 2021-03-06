Template.notifications.helpers({
	notifications: function() {
		return	Notifications.find({userId: Meteor.userId(), read: false});
	},
	notificationCount: function() {
		return Notifications.find({userId: Meteor.userId(), read: false}).count();
	}
})



Template.notifications.helpers({
	notificationPostPath: function() {
		return Router.routers.postPage.path({_id: this.postId});
	}
})

Template.notifications.events({
	'click a': function() {
		Notifications.update(this._id, {$set: {read: true}});
	}
})
