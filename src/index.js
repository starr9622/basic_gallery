import ajax from "../js/ajax.js";
ajax("../json/image.json", function(data) {
  data.forEach(element => {
    let img = document.createElement("img");
    img.setAttribute("src", element);
    document.querySelector("#gallery").appendChild(img);
  });
});
