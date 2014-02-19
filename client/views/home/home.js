Template.home.rendered = function() {
  $('.ui.modal').modal();
    setTimeout(function(){
    $('.modals').transition('pulse','1s');
  },300);
  new WOW().init();
};

Template.home.created = function () {
  // new WOW().init();
};

Template.home.events({
  'click img': function (e, tmpl) {
    var that = $(e.target);
    that.transition('pulse');
  },

  'click .modals': function (e, tmpl) {
    var that = $(e.target).parent().data('modal');
    console.log(that);
    $('.ui.modal.' + that).modal('show');
  }

});