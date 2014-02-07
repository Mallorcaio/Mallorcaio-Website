Template.home.rendered = function() {
  $('.ui.modal').modal();
};

Template.home.events({
  'click img': function (e, tmpl) {
    var that = $(e.target);
    that.transition('pulse');
  },

  'click .modals': function (e, tmpl) {
    $('.ui.modal').modal('show');
  }

});