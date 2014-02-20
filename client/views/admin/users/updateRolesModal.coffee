Template.updateRolesModalInner.rendered = () ->
  # $('.ui.dropdown').dropdown()


Template.updateRolesModalInner.helpers
  name: () ->
    @name
  userInScope: () ->
    Session.get 'userInScope'
  unsetRoles: () ->
    allRoles = _.pluck(Roles.getAllRoles().fetch(), "name")
    return allRoles  unless @roles
    _.difference allRoles, @roles



Template.updateRolesModalInner.events
  'click .add-role': () ->
    role = @toString()
    userId = event.currentTarget.getAttribute("data-user-id")
    Meteor.call('addUserRole',userId,role,(error) ->
      if error
        Log.error error.reason

      Session.set "userInScope", Meteor.users.findOne(userId)
    )