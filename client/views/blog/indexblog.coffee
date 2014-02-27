Template.indexblog.rendered = ->
  $("#sidebar-blog").transition "fade up", "2s"
  return

Template.indexblogLoop.rendered = ->
  $(".post-index").transition "fade down", "2s"
  return

Template.indexblogLoop.helpers
  authorGravatar : ->
    author = @author()
    if author
      unless author.profile.profileImg
        Gravatar.imageUrl author.emails[0].address,
          s: "150"
          d: "http://mallorcaworkshops.org.s3.amazonaws.com/gears.png"
      else
        author.profile.profileImg