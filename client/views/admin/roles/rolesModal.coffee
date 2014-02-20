
Template.rolesModal.rendered = ->

Template.rolesModal.helpers roles: ->
  Meteor.roles.find {}


Template.rolesModal.events
  'click .add-role': (event,template) ->
    event.preventDefault
    role = template.find('[name=role]').value;
    Meteor.call('addRole', role, (error) ->
      if error
        Log.error 'Error:' + error.reason
      template.find('[name=role]').value = ""
    )
    # console.log role
  'click .remove-role': (event,template) ->
    role = @name
    Meteor.call('removeRole', role, (error) ->
      if error
        Log.error 'Error:' + error.reason
    )

