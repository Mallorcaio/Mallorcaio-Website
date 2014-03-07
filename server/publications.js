
Meteor.publish('fotos', function () {
  return Fotos.find();
});

Meteor.publish('cars', function () {
  return Cars.find();
});


Meteor.publish(null, function (){
  return Meteor.roles.find({})

});

Meteor.publish('subscribers', function () {
  return Subscribers.find({});

});



// Only admin can see all users
Meteor.publish('users', function () {
  if (Roles.userIsInRole(this.userId, 'admin')) {

    return Meteor.users.find({});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});