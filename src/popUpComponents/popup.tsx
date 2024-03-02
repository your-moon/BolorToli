import {
  measureLeftRange,
  measureRightRange,
  isMouseOver,
  setMouseOver,
} from "../content/content";
import { checkElementAndRemove } from "../utils/util";
import { getImg } from "./elements";
import { getExtendedPopUp } from "./extendedPopUp";

function createPopUpElement(top: number, left: number) {
  var popUp = document.createElement("div");
  popUp.setAttribute("id", "popup");

  popUp.style.cssText = `top:${top + "px"};left:${left + "px"};`;

  popUp.addEventListener("mouseover", function () {
    setMouseOver(true);
  });
  popUp.addEventListener("mouseout", function () {
    setMouseOver(false);
  });

  return popUp;
}

function calculatePopUpPosition(selectionTextArea: DOMRect) {
  let measured_left_range_rect = measureLeftRange.getBoundingClientRect();
  let measured_right_range_rect = measureRightRange.getBoundingClientRect();
  var top =
    ((selectionTextArea.bottom - measured_right_range_rect.top) * 100) /
      (measured_left_range_rect.top - measured_right_range_rect.top) +
    10;
  var left =
    ((selectionTextArea.left - measured_right_range_rect.left) * 100) /
    (measured_left_range_rect.left - measured_right_range_rect.left);
  return { top, left };
}

function appendPopUpIfNessesary(popUp: HTMLElement) {
  if (!isMouseOver) {
    document.body.appendChild(popUp);
  } else {
    popUp.remove();
  }
}

function removePopUpsIfNoMouseOver() {
  if (!isMouseOver) {
    checkElementAndRemove(getExtendedPopUp());
    checkElementAndRemove(document.getElementById("popup"));
    checkElementAndRemove(getImg());
  }
}

export {
  calculatePopUpPosition,
  appendPopUpIfNessesary,
  removePopUpsIfNoMouseOver,
  createPopUpElement,
};
