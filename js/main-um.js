var landing = {
  init: function () {
    this.getPrice();
    this.formSubmit();
  },
  getPrice: function () {
    $(".new__price").each(function () {
      var p = parseInt($(this).text());
      var currency = $(this).text().replace(/[0-9]/g, "");
      p = (p * 100) / 30;
      p2 = Math.ceil(p);
      $(this)
        .closest(".price")
        .find(".old__price")
        .text(p2 + " " + currency);
    });
  },
  formSubmit: function () {
    $(".card__form").submit(function (event) {
      var size = $(this).find("select").val();

      console.log(size);

      if (size !== undefined) {
        $(this)
          .find("input[name=comment]")
          .val("Size: " + size);
      }
    });
  },
};

$(document).ready(function () {
  landing.init();
});
