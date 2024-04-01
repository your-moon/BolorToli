import "./content.css";
import { createMeasureDiv } from "../popUpComponents/elements";
import { handleMouseUp, handleMouseDown } from "./MouseHandlers";

export const POP_UP_FULL_WIDTH = 250;
export const POP_UP_FULL_HEIGHT = 150;

createMeasureDiv("cal1", 100, 100, 0, 0);
createMeasureDiv("cal2", 0, 0, 0, 0);

export const SELECTION_TEXT = window.getSelection();

export const measureLeftRange = document.createRange();
measureLeftRange.selectNode(document.getElementById("cal1")!);

export const measureRightRange = document.createRange();
measureRightRange.selectNode(document.getElementById("cal2")!);

export let isMouseOver: boolean = false;

export function setMouseOver(value: boolean) {
  isMouseOver = value;
}

window.addEventListener("mouseup", () => {
  handleMouseUp();
});
window.addEventListener("mousedown", function () {
  handleMouseDown();
});
