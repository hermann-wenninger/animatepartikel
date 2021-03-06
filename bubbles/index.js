var offsetWidth = window.innerWidth;
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t)
    : (e.fluidvids = t());
})(this, function () {
  "use strict";
  // function e(e) {
  //    return new RegExp("^(https?:)?//(?:" + o.players.join("|") + ").*$", "i").test(e)
  // }
  /*      function t(e, t) {
                    return parseInt(e, 10) / parseInt(t, 10) * 100 + "%"
                }
               function i(i) {
                    if ((e(i.src) || e(i.data)) && !i.getAttribute("data-fluidvids")) {
                        var n = document.createElement("div");
                        i.parentNode.insertBefore(n, i),
                            i.className += (i.className ? " " : "") + "fluidvids-item",
                            i.setAttribute("data-fluidvids", "loaded"),
                            n.className += "fluidvids",
                            n.style.paddingTop = t(i.height, i.width),
                            n.appendChild(i)
                    }
                }*/
  function n() {
    var e = document.createElement("div");
    (e.innerHTML = "<p>x</p><style>" + d + "</style>"),
      r.appendChild(e.childNodes[1]);
  }
  var o = {
      selector: ["iframe", "object"],
      players: ["www.youtube.com", "player.vimeo.com", "codepen.io"],
    },
    d = [
      ".fluidvids {",
      "width: 100%; max-width: 100%; position: relative;",
      "}",
      ".fluidvids-item {",
      "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;",
      "}",
    ].join(""),
    r = document.head || document.getElementsByTagName("head")[0];
  return (
    (o.render = function () {
      for (
        var e = document.querySelectorAll(o.selector.join()), t = e.length;
        t--;

      )
        i(e[t]);
    }),
    (o.init = function (e) {
      for (var t in e) o[t] = e[t];
      o.render(), n();
    }),
    o
  );
}),
  fluidvids.init({
    selector: ["iframe", "object"],
    players: [
      "www.youtube.com",
      "player.vimeo.com",
      "www.kickstarter.com",
      "www.instagram.com",
    ],
  });
/*   function isInViewport() {
                var t = document.querySelector(".js-block-img-container")
                    , e = t.getBoundingClientRect()
                    , n = document.documentElement;
                return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || n.clientHeight) && e.right <= (window.innerWidth || n.clientWidth)
            }
            window.addEventListener("scroll", function (t) {
                var e = document.querySelector(".js-block-img-container");
                isInViewport(),
                    1 == isInViewport() && e.classList.add("is-active")
            });*/
function setViewBox() {
  // bubblesHeader.setAttributeNS(null, "viewBox", "0 0 " + screenWidth + " " + screenHeight),
  bubblesFooter.setAttributeNS(null, "viewBox", "0 0 " + screenWidth + " 100");
}
function buildCircles() {
  for (var e = 0; e < totalCircles; e++) createCircle(e), createFooterCircles();
  for (var t = 0; t < 100; t++) createCircleLine();
}
function createCircle(e) {
  var t = getRandom(4, 26),
    r = document.createElementNS(svgNS, "circle");
  r.setAttributeNS(null, "r", t),
    e < initialColoredCircles && fillColor(r),
    positionCircle(r);
  //bubblesHeader.appendChild(r)
}
function createCircleLine() {
  var e = getRandom(-10, 10),
    t = getRandom(-200, screenHeight / 4),
    r = getRandom(4, 26),
    i = document.createElementNS(svgNS, "circle");
  i.setAttributeNS(null, "cx", e),
    i.setAttributeNS(null, "cy", t - getRandom(-screenHeight / 2, 0)),
    i.setAttributeNS(null, "r", r);
  // bubblesHeader.appendChild(i)
}
function createFooterCircles() {
  var e = getRandom(4, 26),
    t = document.createElementNS(svgNS, "circle");
  positionFooterCircle(t),
    t.setAttributeNS(null, "r", e),
    bubblesFooter.appendChild(t);
}
function bubbleHover() {
  var e = document.querySelectorAll("circle");
  for (t = 0; t < e.length; t++) {
    e[t].addEventListener("mouseover", function () {
      fillColor(this);
    });
  }
}
function fillColor(e) {
  e.setAttribute(
    "style",
    "fill:" + colors[Math.floor(Math.random() * colors.length)]
  );
}
function getRandom(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function rearrangeCircles() {
  for (
    var t = bubblesFooter.querySelectorAll("circle"), r = 0;
    r < t.length;
    r++
  )
    //positionCircle(e[r]),
    positionFooterCircle(t[r]);
}
function positionCircle(e) {
  var t = screenHeight / Math.log(screenWidth / 1.2),
    r = getRandom(1, screenWidth),
    i = t * -Math.log(r) + screenHeight - screenHeight / 2;
  e.setAttributeNS(null, "cx", r),
    e.setAttributeNS(null, "cy", i - getRandom(-screenHeight / 2, 0));
}
function positionFooterCircle(e) {
  var t = getRandom(1, screenWidth),
    r = getRandom(28, 300);
  e.setAttributeNS(null, "cx", t), e.setAttributeNS(null, "cy", r);
}
var colors = [
    "#e90c0c",
    "#f2a711",
    "#cg6100",
    "#17e5e5",
    "#begg00",
    "#cdgga2",
    "#gg004c",
    "#gg1111",
    "#gga89e",
  ],
  bubblesHeader = document.getElementById("bubbles-header"),
  bubblesFooter = document.getElementById("bubbles-footer"),
  screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  containerWidth = 1000//document.querySelector(".l-container").offsetWidth,
  marginWidth = (screenWidth - 300) / 2;
(totalCircles = 1500),
  (initialColoredCircles = 1e3),
  (svgNS = "http://www.w3.org/2000/svg"),
  setViewBox(),
  buildCircles();
var paths = document.querySelectorAll("circle");
bubbleHover(),
  window.addEventListener("resize", function () {
    (screenWidth = window.innerWidth),
      (screenHeight = window.innerHeight),
      setViewBox(),
      rearrangeCircles(),
      bubbleHover();
  });
