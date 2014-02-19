Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },
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
        NProgress.start();
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
    },
    initWow : function() {
      new WOW().init();
    },
}

Router.before(BeforeHooks.scrollUp);
Router.after(AfterHooks.removeSidebar);
Router.before(BeforeHooks.startNProgress,{only:['blogIndex','blogShow']});
Router.after(AfterHooks.stopNProgress,{only:['blogIndex','blogShow']});



BasicController = RouteController.extend({
  layoutTemplate: 'layout',
  notFoundTemplate : '404',
  load: BeforeHooks.initWow,
  before: [BeforeHooks.animateContentOut, BeforeHooks.initWow, BeforeHooks.startNProgress],
  after: [AfterHooks.animateContentIn, AfterHooks.removeSidebar, AfterHooks.stopNProgress],
});


AdminController = RouteController.extend({
  notFoundTemplate : '404',
  waitOn: function() {
      Meteor.subscribe('users');
  },
  before: [BeforeHooks.isAdmin,BeforeHooks.startNProgress],
  after: [AfterHooks.stopNProgress, AfterHooks.removeSidebar]
});


Router.map(function () {

  this.route('home', {
    path:'/',
    controller: 'BasicController',
  });

  this.route('contact',{
    path: '/contacto',
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


  this.route('blogIndex', {
    path:'/blog',
    controller: 'BasicController',
  });

  this.route('profile', {
    path:'/profile',
    data: function(){
      return Meteor.user();
    }
  });

//Admin Routes


  this.route('admin', {
  path: '/admin',
  layout:'ognoAdminLayout',
  template:'ognoAdminOverview',
  controller: AdminController,

  });

  this.route('adminUsers', {
    path:'/admin/users',
    controller: AdminController
  })
});
