Template.profileModal.rendered = ->
  $('#bio').keydown( (event) ->
    if event.keyCode == 13
      $('#bio').blur()
  )


Template.profileModal.helpers
  email:         -> Meteor.user().emails[0].address if Meteor.user().emails?
  username:      -> Meteor.user().username
  firstName:     -> Meteor.user().profile.firstName
  lastName:      -> Meteor.user().profile.lastName
  organization:  -> Meteor.user().profile.organization
  location:      -> Meteor.user().profile.location
  bio:           -> Meteor.user().profile.bio
  url:           -> Meteor.user().profile.url
  googlePlusUrl: -> Meteor.user().profile.googlePlusUrl
  twitterHandle: -> Meteor.user().profile.twitterHandle

Template.profileModal.events

  'click .submit': ->
    if Meteor.user().profile.firstName
      Router.go('/')
    else
      $('.errors').text('First name is required.')

  'change #email': (event) ->
    Meteor.call('changeEmail', Meteor.userId(), $(event.target).val())

  'change #firstName': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.firstName': $(event.target).val()

  'change #lastName': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.lastName': $(event.target).val()

  'change #username': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'username': $(event.target).val()

  'change #organization': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.organization': $(event.target).val()

  'change #location': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.location': $(event.target).val()

  'change #bio': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.bio': $(event.target).val()

  'change #url': (event) ->
    url = $(event.target).val()
    if not url.match(/^http/) and not url.match(/^https/) and url isnt ''
      url = 'http://' + url
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.url': url

  'change #googlePlusUrl': (event) ->
    url = $(event.target).val()
    if not url.match(/^http/) and not url.match(/^https/) and url isnt ''
      url = 'http://' + url
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.googlePlusUrl': url

  'change #twitterHandle': (event) ->
    Meteor.users.update Meteor.userId(),
      $set:
        'profile.twitterHandle': $(event.target).val()
