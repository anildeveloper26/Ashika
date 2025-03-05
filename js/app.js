$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  if (scroll > 700) {
    $("#main-header").addClass("affix");
  } else {
    $("#main-header").removeClass("affix");
  }
});

$(".c-year").text(new Date().getFullYear());
$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
});
$(".offcanvas-end a").click(function () {
  $(".offcanvas").offcanvas("hide");
});
// Changes Img to SVG
$("img.svg").each(function () {
  var $img = $(this);
  var imgID = $img.attr("id");
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      $img.replaceWith($svg);
    },
    "xml"
  );
});
