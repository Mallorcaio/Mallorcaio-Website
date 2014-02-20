Template.adminUsers.rendered = ->
  $("#rolesModal").modal "attach events", "#rolesModalBtn"
  $("#updateRolesModal").modal "attach events", ".edit-user"
  return

Template.adminUsers.helpers
  users: ->
    Meteor.users.find()

  roles: ->
    @roles

  userCount: ->
    Meteor.users.find().count()


Template.adminUsers.events
  'click .edit-user': (event,template) ->
    Session.set "userInScope", this
    console.log "editing-user"
    # $("#updateRolesModal").modal('show')