function createPopUpElement(top, left) {
  var popUp = document.createElement("div");
  popUp.setAttribute("id", "popup");

  popUp.style.cssText = `position:absolute;border:grey solid 1px; border-radius: 5px; background:white;top:${
    top + "px"
  };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;

  popUp.addEventListener("mouseover", function () {
    GLOBAL_IS_MOUSE_OVER = true;
  });
  popUp.addEventListener("mouseout", function () {
    GLOBAL_IS_MOUSE_OVER = false;
  });

  return popUp;
}

function calculatePopUpPosition(selectionTextArea) {
  let measured_left_range_rect = MEASURE_LEFT_RANGE.getBoundingClientRect();
  let measured_right_range_rect = MEASURE_RIGHT_RANGE.getBoundingClientRect();
  var top =
    ((selectionTextArea.bottom - measured_right_range_rect.top) * 100) /
      (measured_left_range_rect.top - measured_right_range_rect.top) +
    10;
  var left =
    ((selectionTextArea.left - measured_right_range_rect.left) * 100) /
    (measured_left_range_rect.left - measured_right_range_rect.left);
  return { top, left };
}

function appendPopUpIfNessesary(popUp) {
  if (!GLOBAL_IS_MOUSE_OVER) {
    document.body.appendChild(popUp);
  } else {
    popUpRemovalTimeout = setTimeout(() => checkElementAndRemove(popUp), 100);
  }
}
function removePopUpsIfNoMouseOver() {
  if (!GLOBAL_IS_MOUSE_OVER) {
    checkElementAndRemove(getExtendedPopUp());
    checkElementAndRemove(document.getElementById("popup"));
    checkElementAndRemove(getImg());
  }
}
