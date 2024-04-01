import { bolorLogo } from "../popUpComponents/elements";
import {
  appendPopUpIfNessesary,
  calculatePopUpPosition,
  createPopUpElement,
  removePopUpsIfNoMouseOver,
} from "../popUpComponents/popup";
import { handleImgClick } from "./ExtendedPopUpHandler";
import { calculateSelectionAreaPosition } from "./SelectionAreaCalculator";
import { SELECTION_TEXT } from "./content";

export const handleMouseUp = () => {
  if (!SELECTION_TEXT?.isCollapsed) {
    const selectionTextAreaRect = SELECTION_TEXT!
      .getRangeAt(0)
      .getBoundingClientRect();

    const selectionAreaTopPosition = calculateSelectionAreaPosition(
      selectionTextAreaRect,
    );

    const img = bolorLogo();

    img.addEventListener("click", function () {
      handleImgClick(selectionTextAreaRect, selectionAreaTopPosition);
    });

    const popUpPosition = calculatePopUpPosition(selectionTextAreaRect);

    const popUp = createPopUpElement(popUpPosition.top, popUpPosition.left);
    popUp.appendChild(img);

    appendPopUpIfNessesary(popUp);
  }
};

export function handleMouseDown() {
  removePopUpsIfNoMouseOver();
}
