

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



// ======== DB-Model: ========
// "_id" -> ID
// "title" -> string
// "description" -> string
// "mentors" -> [userIDs]   optional
// "startdate" -> ISODate
// "hosts" -> [userIDs]     optional
// "location" -> ...............
// "createdby" -> userId
// "time_created" -> timestamp
// "time_lastedit" -> timestamp
// "course_id" -> ID_course          (maybe list in Future)
// ===========================

Events = new Meteor.Collection("Events");


Events.allow({
  update: function (userId, doc, fieldNames, modifier) {
    return Roles.userIsInRole(userId, 'admin');  // allow only if UserId is present
  },
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, 'admin');  // allow only if UserId is present
  },
  remove: function (userId, doc) {
    return Roles.userIsInRole(userId, 'admin');  // allow only if UserId is present
  }
});