// First we detect the click event
document.getElementById("the-box").addEventListener("click", function () {
  // Using an if statement to check the class
  if (this.classList.contains("bad")) {
    // The box that we clicked has a class of bad so let's remove it and add the good class
    this.classList.remove("bad");
    this.classList.add("good");
    this.style.width = "10rem";
  } else {
    // This time, instead of the alert, let's move the box for fun
    var el = this,
      beg = parseInt(getComputedStyle(el).left),
      end = beg + 200;
    console.log(getComputedStyle(el).getPropertyValue("font-size"));
    function goRight() {
      var cur = parseInt(getComputedStyle(el).left);
      console.log(getComputedStyle(el));

      setTimeout(function () {
        if (cur < end) {
          el.style.left = cur + 40 + "px";
          goRight();
        }
      }, 5);
    }
    goRight();
  }
});
