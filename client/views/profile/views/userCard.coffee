Template.userCard.helpers
  name: ->
    if @profile.firstName && @profile.lastName
      "#{@profile.firstName} #{@profile.lastName}"
    else
      ""

  subhead: ->
    if @profile.organization && @profile.location
      [@profile.organization, @profile.location].join(' - ')
    else
      if @profile.organization
        return @profile.organization
      if @profile.location
        return @profile.location

  bio: -> @profile.bio
  url: -> @profile.url
  googlePlusUrl: -> @profile.googlePlusUrl
  twitterHandle: -> @profile.twitterHandle
  gravatar: ->  unless Meteor.user().profile.profileImg
                  Gravatar.imageUrl Meteor.user().emails[0].address,
                    s: "150"
                    d: "http://mallorcaworkshops.org.s3.amazonaws.com/gears.png"
                else
                  Meteor.user().profile.profileImg

