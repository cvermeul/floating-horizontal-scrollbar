var globalOffset = require("global-offset");

module.exports = function(element) {
  var offset = globalOffset(element),
    scrollbar = document.createElement("div"),
    inner = document.createElement("div");

  element.style.overflowX = "scroll";

  element.parentNode.insertBefore(scrollbar, element);

  scrollbar.style.backgroundColor = "transparent";
  scrollbar.style.position = "fixed";
  scrollbar.style.bottom = 0;
  scrollbar.style.left = offset.left + "px";
  scrollbar.style.height = "20px";
  scrollbar.style.width = element.getBoundingClientRect().width + "px";
  scrollbar.style.overflowX = "scroll";
  scrollbar.style.overflowY = "hidden";

  scrollbar.appendChild(inner);

  inner.style.width = element.children[0].getBoundingClientRect().width + "px";
  inner.style.height = "1px";

  scrollbar.onscroll = function() {
    element.scrollLeft = scrollbar.scrollLeft;
  };
  element.onscroll = function() {
    scrollbar.scrollLeft = element.scrollLeft;
  };

  window.onscroll = function() {
    scrollbar.style.display = element.getBoundingClientRect().height + offset.top < window.scrollY + window.innerHeight ? "none" : "block";
    scrollbar.scrollLeft = element.scrollLeft;
  };
};
