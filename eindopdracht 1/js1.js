$(function () {
  $("#leftP").show();
  $("#rightP").hide();
});

$("#insertName").click(function () {
  var value = $("#name").val();
  $(".container").append("<p>" + value + "</p>");
  return false;
});

$("#naarLinks").click(function () {
  $("#leftP").hide();
  $("#rightP").show();
  return false;
});

$("#naarRechts").click(function () {
  $("#leftP").show();
  $("#rightP").hide();
  return false;
});