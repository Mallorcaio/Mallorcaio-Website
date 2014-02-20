Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  return AccountsEntry.config({
    logo: '/img/logo.png',
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: 'profile',
    profileRoute: 'profile',
    showSignupCode: true
  });
});