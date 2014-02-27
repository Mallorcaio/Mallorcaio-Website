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



