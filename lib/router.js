Router.configure({
  notFoundTemplate : '404',

});


////////////////
// Before Hooks
////////////////

var BeforeHooks = {


  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.render("entrySignIn");
      this.stop();
    }
  },

  isAdmin: function() {
      if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        this.render('no_rights');
        this.stop();
      }
  },

  baseSubscriptions: function() {
      // this.subscribe('userData').wait();
  },

  scrollUp: function() {
      $('body,html').scrollTop(0);
  },

  startNProgress: function() {
      if (_.isFunction(this.data)) {
        NProgress.start();
      }
  },

  pageview: function() {
      GAnalytics.pageview(this.path);
  },

    initWow : function() {
      new WOW().init();
    },

  animateContentOut: function() {
      $('.main-title').removeClass("animated fadeInUp ");
  }


}



////////////////
// After Hooks
////////////////


var AfterHooks = {

    animateContentIn: function() {
        $('.main-title').addClass("animated fadeInUp");
    },

    stopNProgress: function() {
        NProgress.done();
    },

    removeSidebar: function() {
        if ($('.ui.sidebar').hasClass('active')){
          $('.ui.sidebar').sidebar('toggle');
        }
    },

    initFadeUp: function () {
      $('.ui.grid').transition('pulse');
    }
}










Router.map(function () {

  this.route('home', {
    path:'/',
    controller: 'BasicController',
      before: [BeforeHooks.animateContentOut, BeforeHooks.initWow],
  after: [AfterHooks.animateContentIn, AfterHooks.removeSidebar ],
  });

  this.route('contact',{
    path: '/contact',
    controller: 'BasicController'
  });

  this.route('portfolio',{
    path: '/portfolio',
    controller: 'BasicController'

  });

  this.route('team',{
    path: '/team'
  });

  this.route('test',{
    path: '/test',
    controller: 'BasicController',
    before: BeforeHooks.isAdmin
  });


  this.route('admin', {
    path: '/admin',
    controller:'AdminController'

  });
});



BasicController = RouteController.extend({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },
  before: [BeforeHooks.animateContentOut, BeforeHooks.initWow, BeforeHooks.scrollUp],
  after: [AfterHooks.animateContentIn, AfterHooks.removeSidebar ],

});


AdminController = RouteController.extend({
  layoutTemplate:'ognoAdminLayout',
  template:'ognoAdminOverview',
  waitOn: function() {
      return Meteor.subscribe('subscribers');
  },
  before: [BeforeHooks.isLoggedIn,BeforeHooks.isAdmin,BeforeHooks.startNProgress],
  after: AfterHooks.stopNProgress
});

