Fotos = new Meteor.Collection2('fotos', {
      schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            optional: true,
            max: 200
        },
        image : {
              type : String,
              regEx : SchemaRegEx.FilePickerImageUrl,
              optional: true // the RegEx defined here defines the image field
        }
      })
});


Fotos.allow({
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




Cars = new Meteor.Collection2('cars', {
      schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            optional: true,
            max: 200
        },
        brand : {
            type: String,
            label: "Brand",
            optional: true,
            max: 200
        },
        year : {
            type: Number,
            label: "Year",
            optional: true
        },
        selling: {
          type: Boolean,
          label: "Is it for sell?",
          optional: true
        },
        country: {
          type: String,
          label: "Th country of origin",
          optional : true
        }
      })
});


Cars.allow({
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
