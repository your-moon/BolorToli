var regex = /[.,\s]|'s/g;

function createDiv() {
  return document.createElement("div");
}

function checkElementAndRemove(element) {
  if (typeof element != "undefined" && element != null) {
    element.remove();
  }
}

var isOutOfViewport = function (pop_up) {
  // Get element's bounding
  var bounding = pop_up.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  var out = {};
  out.m_right =
    (window.innerWidth || document.documentElement.clientWidth) -
    bounding.right;
  out.m_left = bounding.left;
  out.top_w = bounding.top;
  out.bottom_w =
    (window.innerHeight || document.documentElement.clientHeight) -
    bounding.bottom;
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom =
    bounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight);
  out.right =
    bounding.right >
    (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;
};
