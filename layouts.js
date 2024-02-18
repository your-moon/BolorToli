const POP_UP_FULL_WIDTH = 250;
const POP_UP_FULL_HEIGHT = 150;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function getExtendedPopUp() {
  var extended_pop_up = document.getElementById("extended_pop_up");
  return extended_pop_up;
}

function getImg() {
  var img = document.getElementById("img_bolor_toli_extension");
  return img;
}

function createSingleWordDiv() {
  var h1 = document.createElement("div");
  h1.setAttribute("id", "single_word_div");
  return h1;
}

function createImgDiv() {
  var img = document.createElement("img");

  img.setAttribute("src", "https://bolor-toli.com/icons/logo.svg");
  img.setAttribute("id", "img_bolor_toli_extension");
  return img;
}

function createEmptyDiv() {
  var empty = document.createElement("div");
  empty.setAttribute("id", "empty_div");
  const empty_text = document.createTextNode("Олдсонгүй");
  empty.appendChild(empty_text);
  return empty;
}

function createErrorDiv() {
  var error = document.createElement("div");
  error.setAttribute("id", "error_div");
  const empty_text = document.createTextNode("Алдаа гарлаа");
  error.appendChild(empty_text);
  return error;
}

function createSuggestionColumn() {
  let column = document.createElement("div");
  column.style.cssText = "flex: 50%;padding: 2px;height: auto;color:black;";
  return column;
}

function createSuggestionRow() {
  let row = document.createElement("div");
  row.style.cssText =
    "display: flex;flex-direction: row;justify-content: space-between;";
  return row;
}

function createExtendedPopUp(top, left, width, height) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}

function extendedPopUpViewPortChange(
  selectionTextAreaRect,
  selectionAreaTopPosition,
  extendedPopUp,
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
    extendedPopUp.style.left = null;
    extendedPopUp.style.right = 10 + "px";
  }
}
