Template.SUIblogAdminEdit.rendered = ->
  $('.post-form').parsley()

  @editor = ace.edit 'editor'
  @editor.setTheme 'ace/theme/github'
  @editor.setFontSize 14
  @editor.renderer.setShowPrintMargin false
  @editor.renderer.setShowGutter false
  @editor.setHighlightActiveLine true
  @editor.getSession().setMode 'ace/mode/markdown'
  @editor.getSession().setUseWrapMode true

  @editor.on 'change', _.debounce((e) =>
    height = @editor.getSession().getDocument().getLength() * @editor.renderer.lineHeight + @editor.renderer.scrollBar.getWidth()
    $('#editor, #preview').height height
    @editor.resize()
  , 250)


  $(".ui.checkbox").checkbox
    onEnable: (e, data) =>
      $('#editor').hide()
      val = marked @editor.getValue()
      $('#preview').html(val)
      return $('#preview').html(val).show()

    onDisable: (e, data) =>
      $('#editor').show()
      @editor.getSelection().clearSelection()
      $('#preview').hide()

  @editor.setValue @data.body
  @editor.focus()
  @editor.getSelection().clearSelection()



flash = (status) ->
  setTimeout ->
    $('.status').hide().html(status).fadeIn 'slow', ->
      setTimeout ->
        $('.status').fadeOut 'slow'
      , 2500
  , 100

Template.SUIblogAdminEdit.events

  'click .for-deleting': (e, tpl) ->
    e.preventDefault()
    if confirm 'Are you sure?'
      @destroy()
      Router.go 'blogAdmin'

  'click .for-publishing': (e, tpl) ->
    e.preventDefault()

    if not $('.post-form').parsley 'validate'
      return

    attrs =
      title: $('[name=title]').val()
      body: tpl.editor.getValue()
      excerpt: Post.excerpt tpl.editor.getValue()
      updatedAt: new Date()

    if @published
      status = 'Unpublished'
      $(e.currentTarget).html '<i class="icon globe"> Publish'
      attrs.published = false
      attrs.publishedAt = null

    else
      status = 'Published'
      $(e.currentTarget).html '<i class="icon globe"> Unpublish'
      attrs.published = true
      attrs.publishedAt = new Date()

    @update attrs
    flash status

  'click .for-saving': (e, tpl) ->
    e.preventDefault()

    if not $('.post-form').parsley 'validate'
      return

    @update
      title: $('[name=title]').val()
      body: tpl.editor.getValue()
      excerpt: Post.excerpt tpl.editor.getValue()
      updatedAt: new Date()

    flash 'Saved'
