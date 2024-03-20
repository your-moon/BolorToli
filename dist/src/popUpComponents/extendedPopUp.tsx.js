import { POP_UP_FULL_HEIGHT } from "/src/content/content.tsx.js";
import { isOutOfViewport } from "/src/utils/util.ts.js";
const windowY = window.innerHeight / 2;
export function getExtendedPopUp() {
  var extended_pop_up = document.getElementById("extended_pop_up");
  return extended_pop_up;
}
export function createExtendedPopUp(top, left, width, height) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}
export function extendedPopUpViewPortChange(selectionTextAreaRect, selectionAreaTopPosition, extendedPopUp) {
  var isOut = isOutOfViewport(extendedPopUp);
  console.log(isOut);
  if (windowY < selectionTextAreaRect.y) {
    extendedPopUp.style.top = selectionAreaTopPosition - 10 - selectionTextAreaRect.height - POP_UP_FULL_HEIGHT - 5 + "px";
  }
  if (isOut.top) {
    extendedPopUp.style.top = selectionAreaTopPosition - 10 - selectionTextAreaRect.height - POP_UP_FULL_HEIGHT - 5 + "px";
  }
  if (isOut.bottom) {
    extendedPopUp.style.top = selectionAreaTopPosition - 10 - selectionTextAreaRect.height - POP_UP_FULL_HEIGHT - 5 + "px";
  }
  if (isOut.left) {
    extendedPopUp.style.left = "10px";
  }
  if (isOut.right) {
    extendedPopUp.style.left = "";
    extendedPopUp.style.right = "10px";
  }
}
