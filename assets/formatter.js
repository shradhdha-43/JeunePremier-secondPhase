$(".filter-type.collection").each(function () {
  console.log($(this).data("value"));
  console.log(collex);
  if ($(this).data("value") == collex) {
    $(this).addClass("medium");
  }
});
