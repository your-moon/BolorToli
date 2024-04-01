import { POP_UP_FULL_HEIGHT, POP_UP_FULL_WIDTH } from "../content/content";
import { isOutOfViewport } from "../utils/util";

// const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

export function getExtendedPopUp() {
  var extended_pop_up = document.getElementById("extended_pop_up");
  return extended_pop_up;
}

export function createExtendedPopUpAppend(top: number, left: number) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `top:${top}px;left:${left}px;min-width:${POP_UP_FULL_WIDTH}px;min-height:${POP_UP_FULL_HEIGHT}px;`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}

export function extendedPopUpOverflowHandle(
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
