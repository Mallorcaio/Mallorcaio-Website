Meteor.startup ->
  if Meteor.isClient
    Blog.config
      blogIndexTemplate: "indexblog"
      blogShowTemplate: "singlepost"
      blogAdminTemplate: "SUIblogAdmin"
      blogAdminNewTemplate: "SUIblogAdminNew"
      blogAdminEditTemplate: "SUIblogAdminEdit"

  if Meteor.isServer
    Blog.config
      adminRole: "blogAdmin"
      title: "Mallorca.io - El desarrollo para todos"
      description: "Mallorca.io es una iniciativa sin ánimo de lucro para acercar el desarrollo web a todo el mundo."
