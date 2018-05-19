$(document).ready(function() {
  $('h1').click(h1Click)
})

function h1Click () {
  console.log("clicked")
  $('#AddieBeard').append(`<img src='./beardAddie.jpg' alt="" />`)
  console.log($('#AddieBeard').data('juror-id'))
}
