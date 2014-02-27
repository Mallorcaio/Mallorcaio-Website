# disqus_sso_res = `undefined`
# disqus_config = ->
#   # The generated payload which authenticates users with Disqus
#   @page.remote_auth_s3 = disqus_sso_res.auth
#   @page.api_key = disqus_sso_res.pubKey
#   return

# Template.disqusBlock.rendered = ->
#   Meteor.call "disqusSSO", (error, result) ->
#     unless error
#       console.log "[DISQUS]", "SSO successful"
#       disqus_sso_res = result
#       disqus = $("#disqus-container")
#       if _(disqus.data("disqus")).isUndefined()
#         el = document.createElement("script")
#         el.src = "/js/disqus/disqus.js"
#         el.type = "text/javascript"
#         disqus.prepend el
#         disqus.data "disqus", 1
#     else
#       console.log "[DISQUS]", "SSO error", error
#     return

#   return

disqus_shortname = 'mallorcaio'
isDisqusLoaded = false
myScriptLoader = funcMyScriptLoader = (jsEl, callback) ->
  if window.attachEvent

    # for IE (sometimes it doesn't send loaded event but only complete)
    jsEl.onreadystatechange = funcOnReadyStateChange = ->
      if jsEl.readyState is "complete"
        jsEl.onreadystatechange = ""
      else jsEl.onreadystatechange = ""  if jsEl.readyState is "loaded"
      callback()  if typeof callback is "function"
      return
  else

    # most browsers
    jsEl.onload = funcOnLoad = ->
      callback()  if typeof callback is "function"
      return
  return

Template.disqusBlock.rendered = funcTplDisqusRendered = ->
  unless isDisqusLoaded
    myElJs = document.createElement("script")
    s = document.getElementsByTagName("script")[0]
    myElJs.type = "text/javascript"
    myElJs.async = true
    myElJs.src = "//" + disqus_shortname + ".disqus.com/embed.js"
    myScriptLoader myElJs, funcEventLoaded = ->
      isDisqusLoaded = true
      return

    s.parentNode.insertBefore myElJs, s
  return