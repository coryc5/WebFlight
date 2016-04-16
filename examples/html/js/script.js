/* globals $, alert */

$(document).ready(() => {
  $('#feedback-link').click(() => {
    $('.form').dialog('open')
  })

  $('.form').dialog({
    width: 400,
    autoOpen: false,
    modal: true,
    show: 'clip',
    closeOnEscape: true
  })

  $('#submit').on('click', () => {
    alert('Thanks for submitting your feedback!')
    $('.form').dialog('close')
  })

  $('#close').on('click', () => {
    $('.form').dialog('close')
  })

  $('.gallery-pic').on('click', function () {
    $('.big-pic').attr('src', $(this).attr('src'))
  })
})
