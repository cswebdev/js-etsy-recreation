(function () {
   "use strict";

   const source = document.getElementById("data.js");
   const template = Handlebars.compile(source);

   const context = {
      title: "",
      description: "",
      price: "",
   };
   const html = template(context);
   Insert.getElementById("etsy-recreation").insertAdjacentHTML(
      "afterbegin",
      html
   );
})();
