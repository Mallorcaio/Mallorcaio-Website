Template.singlepost.rendered = ->
  $(".popup").popup transition: "fade up"
  $(":header").addClass "ui header"



Template.blogPostBody.helpers
  authorGravatar : ->
    author = @author()
    if author
      unless author.profile.profileImg
        Gravatar.imageUrl author.emails[0].address,
          s: "150"
          d: "http://mallorcaworkshops.org.s3.amazonaws.com/gears.png"
      else
        author.profile.profileImg