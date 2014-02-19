AccountsEntry = {
  settings: {
    wrapLinks: false,
    homeRoute: 'home',
  },
  config: function(appConfig) {
    return this.settings = _.extend(this.settings, appConfig);
  }
};

this.AccountsEntry = AccountsEntry;



Meteor.startup(function() {

  return AccountsEntry.config({

    logo: '/img/logo_io.jpg',
    privacyUrl: '/privacy-policy',
    wrapLinks: false,
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: 'dashboard',
    profileRoute: 'profile',
    showSignupCode: false
  });
});