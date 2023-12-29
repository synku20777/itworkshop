document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var mainHeader = document.getElementsByTagName("header")[0];

  window.addEventListener(
    "scroll",
    function () {
      var currentScroll = window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scroll down
        mainHeader.style.top = "-80.5px"; // Adjust based on the header's height
      } else {
        // Scroll up
        mainHeader.style.top = "0";
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    },
    false
  );
});
