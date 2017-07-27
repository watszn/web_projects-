$(document).ready(function() {
  var num = 16
  makeGrid(num);

  function makeGrid(num) {

    for (i = 0; i < num * num; i++) {
      $("<div>", {class: 'col'}).appendTo($(".container"))
    };
    makeSquare();
    randomColor();
  }

  function makeSquare() {
    sq = 800 / num
    $(".col").css('height', sq + 'px');
    $(".col").css('width', sq + 'px');
  }

  function randomColor() {
    $(".col").on('mouseover', function () {
      var r = Math.floor(Math.random() * 256)
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)
      console.log(r)
      console.log(g)
      console.log(b)
      $(this).css('background-color', "rgb(" + r + "," + g + "," + b + ")");
    })
  }

  $('#Clear').on('click', function () {
    console.log('clear')
    $('.col').css("background-color", "rgb(255, 255, 255)");
  });

   $('#GridSize').on('change', function () {
     num = $('#GridSize :selected').text();
     console.log(num);
     $('.col').remove();
     makeGrid(num);
   });

});
