OgnoAdmin.config({
    auto : true,
    filepicker : 'AZaQRQGWTT7KcbW8zKtBvz',
    prefix: 'admin',

    isAllowed : function () {
      var user = Meteor.user();
      if (Roles.userIsInRole(user, ['admin'])) {
        return true;
      }
      return false;
    }
});
