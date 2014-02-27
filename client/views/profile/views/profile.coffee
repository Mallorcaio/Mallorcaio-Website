Template.profile.events
  'click #profileModalBtn': () ->
     $('#profileModal').modal('toggle')

Template.profile.helpers
  gravatar: ->  unless Meteor.user().profile.profileImg
                  Gravatar.imageUrl Meteor.user().emails[0].address,
                    s: "150"
                    d: "http://mallorcaworkshops.org.s3.amazonaws.com/gears.png"
                else
                  Meteor.user().profile.profileImg