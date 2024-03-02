import { POP_UP_FULL_HEIGHT } from "../content/content";
import { isOutOfViewport } from "../utils/util";

// const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

export function getExtendedPopUp() {
  var extended_pop_up = document.getElementById("extended_pop_up");
  return extended_pop_up;
}

export function createExtendedPopUp(
  top: number,
  left: number,
  width: number,
  height: number,
) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}

export function extendedPopUpViewPortChange(
  selectionTextAreaRect: DOMRect,
  selectionAreaTopPosition: number,
  extendedPopUp: HTMLElement,
) {
  var isOut = isOutOfViewport(extendedPopUp);
  console.log(isOut);
  if (windowY < selectionTextAreaRect.y) {
    extendedPopUp.style.top =
      selectionAreaTopPosition -
      10 -
      selectionTextAreaRect.height -
      POP_UP_FULL_HEIGHT -
      5 +
      "px";
  }
  if (isOut.top) {
    extendedPopUp.style.top =
      selectionAreaTopPosition -
      10 -
      selectionTextAreaRect.height -
      POP_UP_FULL_HEIGHT -
      5 +
      "px";
  }
  if (isOut.bottom) {
    extendedPopUp.style.top =
      selectionAreaTopPosition -
      10 -
      selectionTextAreaRect.height -
      POP_UP_FULL_HEIGHT -
      5 +
      "px";
  }
  if (isOut.left) {
    extendedPopUp.style.left = 10 + "px";
  }
  if (isOut.right) {
    extendedPopUp.style.left = "";
    extendedPopUp.style.right = 10 + "px";
  }
}
