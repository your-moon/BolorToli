// // import "../index.css"; //commented to prevent tailwind styles leaking into the webpage
// // but if you want to use tailwind in content app, import the index.css file
import "./content.css";
import {
  createEmptyDiv,
  createErrorDiv,
  createImgDiv,
  createMeasureDiv,
  createPopUpElement,
  createSingleWordDiv,
  createSuggestionColumn,
  createSuggestionRow,
} from "../components/elements";
import {
  createExtendedPopUp,
  extendedPopUpViewPortChange,
} from "../components/extendedPopUp";
import {
  appendPopUpIfNessesary,
  calculatePopUpPosition,
  removePopUpsIfNoMouseOver,
} from "../components/popup";
import { getData } from "../utils/hash";
import { regex } from "../utils/util";

export const POP_UP_FULL_WIDTH = 250;
export const POP_UP_FULL_HEIGHT = 150;
createMeasureDiv("cal1", 100, 100, 0, 0);
createMeasureDiv("cal2", 0, 0, 0, 0);

const SELECTION_TEXT = window.getSelection();

export const measureLeftRange = document.createRange();
measureLeftRange.selectNode(document.getElementById("cal1")!);

export const measureRightRange = document.createRange();
measureRightRange.selectNode(document.getElementById("cal2")!);

export let isMouseOver: boolean = false;

export function setMouseOver(value: boolean) {
  isMouseOver = value;
}

function calculateSelectionAreaPosition(selectionTextAreaRect: DOMRect) {
  const measuredLeftRangeRect = measureLeftRange.getBoundingClientRect();
  const measuredRightRangeRect = measureRightRange.getBoundingClientRect();
  const selectionAreaTopPosition =
    ((selectionTextAreaRect.bottom - measuredRightRangeRect.top) * 100) /
      (measuredLeftRangeRect.top - measuredRightRangeRect.top) +
    10;
  const selectionAreaLeftPosition =
    ((selectionTextAreaRect.left - measuredRightRangeRect.left) * 100) /
    (measuredLeftRangeRect.left - measuredRightRangeRect.left);

  return { selectionAreaTopPosition, selectionAreaLeftPosition };
}
function handleMouseUp() {
  if (!SELECTION_TEXT!.isCollapsed) {
    const selectionTextAreaRect = SELECTION_TEXT!
      .getRangeAt(0)
      .getBoundingClientRect();
    console.log(selectionTextAreaRect);

    const { selectionAreaTopPosition, selectionAreaLeftPosition } =
      calculateSelectionAreaPosition(selectionTextAreaRect);

    console.log(selectionAreaTopPosition, selectionAreaLeftPosition);
    const img = createImgDiv();

    img.addEventListener("click", function () {
      handleImgClick(selectionTextAreaRect, selectionAreaTopPosition);
    });

    const popUpPosition = calculatePopUpPosition(selectionTextAreaRect);

    const popUp = createPopUpElement(popUpPosition.top, popUpPosition.left);
    popUp.appendChild(img);

    appendPopUpIfNessesary(popUp);
  }
}
async function handleImgClick(
  selectionTextAreaRect: DOMRect,
  selectionAreaTopPosition: number,
) {
  let extendedPopUpLeftPosition =
    selectionTextAreaRect.left +
    selectionTextAreaRect.width / 2 -
    POP_UP_FULL_HEIGHT / 2;

  var extendedPopUp = createExtendedPopUp(
    selectionAreaTopPosition,
    extendedPopUpLeftPosition,
    POP_UP_FULL_WIDTH,
    POP_UP_FULL_HEIGHT,
  );
  document.body.appendChild(extendedPopUp);

  extendedPopUpViewPortChange(
    selectionTextAreaRect,
    selectionAreaTopPosition,
    extendedPopUp,
  );
  var sendingText = SELECTION_TEXT!.toString().toLowerCase().trim();
  sendingText = sendingText.replace(regex, "");

  var data = getData(sendingText)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((e) => console.log(e));

  var fetchedData = await data;

  console.log(fetchedData);
  if (fetchedData.type == "error") {
    var error = createErrorDiv();
    extendedPopUp.appendChild(error);
  } else if (fetchedData.data.er_cnt == 0 && fetchedData.data.sr_cnt == 0) {
    var empty = createEmptyDiv();
    extendedPopUp.appendChild(empty);
  } else if (fetchedData.data.er_cnt != 0) {
    var translates = fetchedData.data.er;
    for (var i = 0; i < translates.length; i++) {
      var words = translates[i].w.vars[0].w;
      var h1 = createSingleWordDiv();
      const textNode = document.createTextNode(words);
      h1.appendChild(textNode);
      extendedPopUp.appendChild(h1);
    }
  } else {
    var suggestions = fetchedData.data.sr;
    console.log("suggestions");
    for (var i = 0; i < suggestions.length; i++) {
      var row = createSuggestionRow();
      var column_1 = createSuggestionColumn();
      var column_2 = createSuggestionColumn();
      const suggest_w = document.createTextNode(suggestions[i].t.vars[0].w);
      const suggest_t_w = document.createTextNode(suggestions[i].w.vars[0].w);
      column_1.appendChild(suggest_w);
      column_2.appendChild(suggest_t_w);
      row.appendChild(column_1);
      row.appendChild(column_2);
      extendedPopUp.appendChild(row);

      console.log(suggestions[i].t.vars[0].w);
      console.log(suggestions[i].w.vars[0].w);
    }
  }

  extendedPopUp.addEventListener("mouseover", function () {
    isMouseOver = true;
  });
  extendedPopUp.addEventListener("mouseout", function () {
    isMouseOver = false;
  });
}
function handleMouseDown() {
  removePopUpsIfNoMouseOver();
}

window.addEventListener("mouseup", () => {
  handleMouseUp();
});
window.addEventListener("mousedown", function () {
  handleMouseDown();
});
