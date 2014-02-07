Meteor.startup(function() {

  if (Meteor.isClient) {

  return SEO.config({
    title: 'Mallorca.io - Webdev in Mallorca',
    meta: [
      {
        key: 'description',
        value: 'Una comunidad de desarollo web en Mallorca'
      }
    ],
    og: [
      {
        key: 'image',
        value: 'http://semanticboilerplate.meteor.com/img/img80.jpg'
      },
      {
        key: 'title',
        value: 'Real-time web development in Mallorca'
      },
      {
        key: 'url',
        value: 'http://semanticboilerplate.meteor.com'
      }
    ]
  });

  }
});