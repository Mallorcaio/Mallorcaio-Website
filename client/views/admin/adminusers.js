Template.adminUsers.rendered = function () {
};


Template.adminUsers.helpers({
  users: function () {
    return Meteor.users.find();
  },
  roles: function() {
    return this.roles;
  },
  userCount: function () {
    return Meteor.users.find().count();
  }
});