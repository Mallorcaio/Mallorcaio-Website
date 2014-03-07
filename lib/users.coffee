isAdmin = ->

  # user = (typeof user === 'undefined') ? Meteor.user() : user;
  # return !!user && !!user.isAdmin;
  if Meteor.user() and Roles.userIsInRole(Meteor.user(), "admin")
    true
  else
    false



# User info helper methods because stuff isn't in a single spot for all auth methods :-P
displayName = (user) ->
  return user.profile.name  if user.profile and user.profile.name
  return user.name  if user.name
  return user.emails[0].address  if user.emails and (user.emails.length > 0)
  if user.services
    #Iterate through services
    for serviceName of user.services
      serviceObject = user.services[serviceName]
      #If an 'id' isset then assume valid service
      if serviceObject.id
        return serviceObject.name  if serviceObject.name
        return serviceObject.email  if serviceObject.email
  user._id

contactEmail = (user) ->
  return null  unless user
  return user.emails[0].address  if user.emails and user.emails.length
  if user.services
    #Iterate through services
    for serviceName of user.services
      serviceObject = user.services[serviceName]
      #If an 'id' isset then assume valid service
      return serviceObject.email  if serviceObject.email  if serviceObject.id
  null