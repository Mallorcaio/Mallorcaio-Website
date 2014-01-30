Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');


    //===============================================================================
    //===============================================================================
    // USERS

    // crate our administrator
    sysadminId = Accounts.createUser({
      _id: 'sysadmin',
      username: 'admin',
      password: 'Pa1mandP1ay',
      // roles: ['admin'],
      email: 'info@mallorca.io',
      profile: {
        name: 'admin',
        avatar: 'logo.svg'
      }
    });

     Roles.addUsersToRoles(sysadminId, 'admin');
    console.info('Account created: ' + sysadminId);
    console.info('Account created: ' + sysadminId);
  }

});