import {
  measureLeftRange,
  measureRightRange,
  isMouseOver,
} from "../content/content";
import { checkElementAndRemove } from "../utils/util";
import { getImg } from "./elements";
import { getExtendedPopUp } from "./extendedPopUp";

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
};
