function createMeasureDiv(id, top, left, width, height) {
  var measure = document.createElement("div");
  measure.textContent = " ";
  measure.setAttribute("id", id);
  measure.style.cssText = `position:absolute;height:${height}px;width:${width}px;top:${top}px;left:${left}px;overflow:none;z-index:-100;`;
  document.body.appendChild(measure);
  return measure;
}

var measure_left = createMeasureDiv("cal1", 100, 100, 0, 0);
var measure_right = createMeasureDiv("cal2", 0, 0, 0, 0);

var popUpRemovalTimeout = null;

const SELECTION_TEXT = window.getSelection();

const MEASURE_LEFT_RANGE = document.createRange();
MEASURE_LEFT_RANGE.selectNode(document.getElementById("cal1"));

const MEASURE_RIGHT_RANGE = document.createRange();
MEASURE_RIGHT_RANGE.selectNode(document.getElementById("cal2"));
var GLOBAL_IS_MOUSE_OVER = false;

function calculateSelectionAreaPosition(selectionTextAreaRect) {
  const measuredLeftRangeRect = MEASURE_LEFT_RANGE.getBoundingClientRect();
  const measuredRightRangeRect = MEASURE_RIGHT_RANGE.getBoundingClientRect();
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
  if (!SELECTION_TEXT.isCollapsed) {
    const selectionTextAreaRect =
      SELECTION_TEXT.getRangeAt(0).getBoundingClientRect();
    console.log(selectionTextAreaRect);

    const { selectionAreaTopPosition, selectionAreaLeftPosition } =
      calculateSelectionAreaPosition(selectionTextAreaRect);

    console.log(selectionAreaTopPosition, selectionAreaLeftPosition);
    const img = createImgDiv();

    img.addEventListener("click", function () {
      handleImgClick(selectionTextAreaRect, selectionAreaTopPosition);
    });

    const popUp = createPopUpElement(
      selectionAreaTopPosition,
      selectionAreaLeftPosition,
    );
    popUp.appendChild(img);

    appendPopUpIfNessesary(popUp);
  }
}

async function handleImgClick(selectionTextArea, selectionAreaTopPosition) {
  let extendedPopUpLeftPosition =
    selectionTextArea.left +
    selectionTextArea.width / 2 -
    POP_UP_FULL_HEIGHT / 2;

  let extendedPopUp = createExtendedPopUp(
    selectionAreaTopPosition,
    extendedPopUpLeftPosition,
    POP_UP_FULL_WIDTH,
    POP_UP_FULL_HEIGHT,
  );
  document.body.appendChild(extendedPopUp);

  extendedPopUpViewPortChange(selectionTextArea, extendedPopUp, windowY);

  var sendingText = SELECTION_TEXT.toString().toLowerCase().trim();
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
    GLOBAL_IS_MOUSE_OVER = true;
  });
  extendedPopUp.addEventListener("mouseout", function () {
    GLOBAL_IS_MOUSE_OVER = false;
  });
}
function handleMouseDown() {
  clearTimeout(popUpRemovalTimeout); // Prevent immediate removal
  removePopUpsIfNoMouseOver();
}

window.addEventListener("mouseup", () => {
  handleMouseUp();
});
window.addEventListener("mousedown", function () {
  handleMouseDown();
});
