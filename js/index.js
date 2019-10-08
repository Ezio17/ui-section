$('.slide__plus').click(function() {
  $(this)
    .closest('.slide__section')
    .children('.description')
    .toggle('slow');

  if ($(this).text() === '+') {
    $(this).text('-');
  } else {
    $(this).text('+');
  }
});
