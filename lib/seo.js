Meteor.startup(function() {

  if (Meteor.isClient) {

  return SEO.config({
    title: 'Mallorca.io - El desarrollo para todos',
    meta: [
      {
        key: 'description',
        value: 'Una comunidad de desarrollo web en Mallorca'
      }
    ],
    og: [
      {
        key: 'image',
        value: 'http://mallorca.io/img/logo.png'
      },
      {
        key: 'title',
        value: 'Real-time web development in Mallorca'
      },
      {
        key: 'url',
        value: 'http://mallorca.io'
      }
    ]
  });

  }
});