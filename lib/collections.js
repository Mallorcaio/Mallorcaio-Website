

Subscribers = new Meteor.Collection2('subscribers',{
          schema : new SimpleSchema({
            email: {
              type: String,
              label: "email",
              optional: true
            }
          })
});


Subscribers.allow({
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, 'admin') || doc.owner === userId;
  },
  update: function (userId, doc, fields, modifier) {
   return Roles.userIsInRole(userId, 'admin') || doc.owner === userId;
  },
  remove: function (userId, doc) {
   return Roles.userIsInRole(userId, 'admin') || doc.owner === userId;
  },
  fetch: [],
  transform: function () {
    return Roles.userIsInRole(userId, 'admin') || doc.owner === userId;
  }

});


Meteor.roles.allow({
  insert: function (userId) {
    return Roles.userIsInRole(userId, 'admin');
  },
  update: function (userId) {
   return Roles.userIsInRole(userId, 'admin');
  },
  remove: function (userId) {
   return Roles.userIsInRole(userId, 'admin');
  },
  fetch: [],
  transform: function () {
    return Roles.userIsInRole(userId, 'admin');
  }
});


